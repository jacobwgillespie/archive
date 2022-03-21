#!/usr/bin/env ruby

$:.unshift File.dirname(__FILE__)


require "rubygems"
require "bundler/setup"
Bundler.require(:default)

require 'fileutils'
require 'pp'

require 'renamer/constants'
require 'renamer/util'
require 'renamer/files'
require 'renamer/season'
require 'renamer/matcher'


class Object
  # Invokes the method identified by the symbol +method+, passing it any arguments
  # and/or the block specified, just like the regular Ruby <tt>Object#send</tt> does.
  #
  # *Unlike* that method however, a +NoMethodError+ exception will *not* be raised
  # and +nil+ will be returned instead, if the receiving object is a +nil+ object or NilClass.
  #
  # If try is called without a method to call, it will yield any given block with the object.
  #
  # Please also note that +try+ is defined on +Object+, therefore it won't work with
  # subclasses of +BasicObject+. For example, using try with +SimpleDelegator+ will
  # delegate +try+ to target instead of calling it on delegator itself.
  #
  # ==== Examples
  #
  # Without +try+
  #   @person && @person.name
  # or
  #   @person ? @person.name : nil
  #
  # With +try+
  #   @person.try(:name)
  #
  # +try+ also accepts arguments and/or a block, for the method it is trying
  #   Person.try(:find, 1)
  #   @people.try(:collect) {|p| p.name}
  #
  # Without a method argument try will yield to the block unless the receiver is nil.
  #   @person.try { |p| "#{p.first_name} #{p.last_name}" }
  #--
  # +try+ behaves like +Object#send+, unless called on +NilClass+.
  def try(*a, &b)
    if a.empty? && block_given?
      yield self
    else
      __send__(*a, &b)
    end
  end
end

class NilClass
  # Calling +try+ on +nil+ always returns +nil+.
  # It becomes specially helpful when navigating through associations that may return +nil+.
  #
  # === Examples
  #
  #   nil.try(:name) # => nil
  #
  # Without +try+
  #   @person && !@person.children.blank? && @person.children.first.name
  #
  # With +try+
  #   @person.try(:children).try(:first).try(:name)
  def try(*args)
    nil
  end
end


EXTS = %w(avi mpeg xvid mp4 m4v mkv wmv mpg)

QUALITIES = [
  'cam', 'camrip',
  'ts', 'telesync',
  'scr', 'screener', 'dvdscr', 'dvdscreener',
  'r5',
  'ppvrip', 'ppv',
  'dvdrip',
  'dvdr', 'dvd',
  'hdtv', 'pdtv', 'dsr', 'dvb', 'tvrip', 'stv', 'dth',
  'bdrip', 'brrip', 'bluray', 'mkv', 'bdr', 'bd5', 'bd9'
]

FORMATS = [
  'divx', 'xvid', 'x264', '264', 'mpeg', 'wmv'
]


def lcs_size(s1, s2)

    num=Array.new(s1.size){Array.new(s2.size)}
    len,ans=0

   s1.scan(/./).each_with_index do |l1,i |
     s2.scan(/./).each_with_index do |l2,j |

        unless l1==l2
           num[i][j]=0
        else
          (i==0 || j==0)? num[i][j]=1 : num[i][j]=1 + num[i-1][j-1]
          len = ans = num[i][j] if num[i][j] > len
        end
     end
   end

   ans

end
def lcs(s1, s2)
  res=""
  num=Array.new(s1.size){Array.new(s2.size)}
  len,ans=0
  lastsub=0
  s1.scan(/./).each_with_index do |l1,i |
    s2.scan(/./).each_with_index do |l2,j |
      unless l1==l2
        num[i][j]=0
      else
        (i==0 || j==0)? num[i][j]=1 : num[i][j]=1 + num[i-1][j-1]
        if num[i][j] > len
          len = ans = num[i][j]
          thissub = i
          thissub -= num[i-1][j-1] unless num[i-1][j-1].nil?
          if lastsub==thissub
            res+=s1[i,1]
          else
            lastsub=thissub
            res=s1[lastsub, (i+1)-lastsub]
          end
        end
      end
    end
  end
  res
end

def dups_with_count array
  hash = Hash.new(0)
  array.each {|v| hash[v] += 1}
  hash.reject! { |key, value| value == 1 }
  hash
end


show_id = 73630
season_number = 1
season = Renamer::Season.new(show_id, season_number)

season.episodes.each do |episode|
  puts "#{episode[:name]} is episode #{episode[:number]}"
  puts "If there were parts, it would be episode #{episode[:part_number]} part #{episode[:part_letter]}"

  puts
end

files_class = Renamer::Files.new('.')
files_class.known_episodes = season.episodes



files_class.process

puts "#{files_class.files.length} Media Files Found"
matcher = Renamer::Matcher.new files_class, season
matcher.match

#pp matcher.files


counter = 0
matcher.episode_slots.each do |slot, episodes|
  print "Slot #{slot}: "
  print "#{season.episodes[counter][:name]} E#{season.episodes[counter][:number]}" if season.episodes[counter]
  puts
  episodes.each do |file|
    puts "\t#{file[:name]}"
  end
  puts
  counter += 1
end

counter = 0
matcher.episode_slots.each do |slot, episodes|
  episodes.each do |file|
    puts "mv \"#{file[:name]}\" \"#{slot} - #{season.episodes[counter][:name]}.avi\""
  end
  counter += 1
end
#pp files_class.files

=begin

begin

  #show_id = ask("What is the TMDb show ID? ")
  #season = ask("What is the season number? ")

  show_id = 75886

  show = tvdb.get_series_by_id(show_id)
  show.episodes

  files_class = Renamer::Files.new('.')
  files = files_class.files

  puts "#{files.length} Media Files Found"

  puts files_class.parts
  puts files_class.duplicate_parts
  puts files_class.common_duplicate_parts

  files.each do |file|
    puts file
    episode, score = most_similar(file, show.episodes)

    parts = file.split(/[ ,\-\.\(\)]/).compact.reject(&:empty?)
    parts.reject! { |p| QUALITIES.include? p.downcase }
    parts.reject! { |p| EXTS.include? p.downcase }
    parts.reject! { |p| FORMATS.include? p.downcase }
    puts "Filename in parts is #{parts}"



    unless parts_plus_numbers.first[:idx] == -1
      guess_title = parts[(parts_plus_numbers.first[:idx] + 1)..-1].join ' '
      episode, score = most_similar(guess_title, show.episodes)
      puts "The guessed episode title is #{guess_title}"
    end

    puts "Similar (#{score}) to #{episode.name}"

    if ep == -1
      puts "Unable to find an episode number in the filename"
      print "Using matched episode number #{episode.number}"
    else
      print "Guessed episode number is #{ep}"
    end
    print " part #{pt}" unless pt.nil?
    puts
    puts "This does NOT match the title" unless ep == episode.number


    puts "\n\n"
  end

rescue EOFError
  abort "\n^D"
rescue Interrupt
  abort "\n^C"
end

=end