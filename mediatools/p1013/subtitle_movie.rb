#!/usr/bin/env ruby

require 'optparse'
require 'uri'
require 'rubygems'
require 'lib/osdb'

def env_lang
  OSDb::Language.from_locale(ENV['LANG'])
end

@options = {:language => env_lang.to_iso639_2b, :force => false, :dir => nil }
@parser ||= OptionParser.new do |opts|
  opts.banner = "Automatically download subs for your video files using opensubtitle.org"
  opts.separator ""
  opts.separator "Usage: getsub [options] DIRECTORY | VIDEO_FILE [VIDEO_FILE ...]"
  opts.separator ""
  opts.separator "Main options:"
  
  opts.on("-l", "--language LANGUAGE", "Sub language ISO 963 code like fre or eng. Default: env $LANG (#{env_lang.to_iso639_2b})") do |language|
    @options[:language] = language
  end
  
  opts.on("-d", "--directory DIRECTORY", "Specify a directory to search recursively for movies") do |dir|
    @options[:dir] = dir
  end
  
  opts.on("-f", "--force", "Download sub even if video already has one") { @options[:force] = true }
end
@parser.parse!

def curl_available?
  %x{ curl --version 2> /dev/null > /dev/null }
  $?.success?
end

def wget_available?
  %x{ wget --version 2> /dev/null > /dev/null }
  $?.success?
end

def download!(url, local_path)
  puts "* download #{url} to #{local_path}"
  if curl_available?
    %x{ curl -s '#{url}' | gunzip > "#{local_path}" }
  elsif wget_available?
    %x{ wget -O -quiet - '#{url}' | gunzip > "#{local_path}"}
  else
    puts "Can't found any curl or wget please install one of them or manualy download your sub"
    puts url
  end
end

def group_by_movie_name(subs)
  subs.inject({}) do |hash, sub| 
    hash[sub.movie_name] ||= []
    hash[sub.movie_name] << sub
    hash
  end
end

def ask_user_to_identify_movie(movies)
  puts "D'oh! You stumbled upon a hash conflict, please resolve it:"
  puts
  movies.keys.each_with_index do |name, index|
    puts " #{index} - #{name}"
  end
  puts
  print 'id: '
  str = STDIN.gets
  movies[movies.keys[str.to_i]]
end

def select_sub(subs)
  return subs.first if subs.length == 1
  movies = group_by_movie_name(subs)
  return movies.values.first.max if movies.length == 1
  selected_movie_subs = ask_user_to_identify_movie(movies)
  selected_movie_subs.max
end

def arg_files
  return ARGV unless @options[:dir]
  Dir.glob(File.join(@options[:dir], '**', "*.{#{OSDb::Movie::EXTENSIONS.join(',')}}"))
end

movies = arg_files.map{ |path| OSDb::Movie.new(path) }
movies.reject!(&:has_sub?) unless @options[:force]

server = OSDb::Server.new(
  :host => 'api.opensubtitles.org', 
  :path => '/xml-rpc', 
  :timeout => 90, 
  :useragent => "SubDownloader 2.0.10" # register useragent ? WTF ? too boring.
) 
STDOUT.sync = true

if movies.empty?
  puts "No file provided"
  puts @parser.help
  exit 1
end

movies.each do |movie|
  begin
    puts "* search subs for: #{movie.path}"
    subs = server.search_subtitles(:moviehash => movie.hash, :moviebytesize => movie.size, :sublanguageid => @options[:language])
    if subs.any?
      sub = select_sub(subs)
      sub_path = movie.sub_path(sub.format)
      download!(sub.url, sub_path)
    else
      puts "* no sub found"
    end
    puts
  rescue Exception => e
    puts "#{e.class.name}: #{e.message}:"
    puts e.backtrace
  end
end
