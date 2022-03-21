#!/usr/bin/env ruby
require "rubygems"
require "bundler/setup"
Bundler.require(:default)

Dir[File.dirname(__FILE__) + '/lib/*.rb'].each {|file| require file }

require 'pp'

title = ARGV[0..-1].join(' ')

puts "Finding TV Show Download for #{title}"

auteur = Auteur::API.new trakt: Settings.trakt_key,
                tvdb:  Settings.tvdb_key,
                tmdb:  Settings.tmdb_key
Auteur::Logger.new STDERR, :warn


#results = TVRage::Show.search title
results = auteur.tvdb.api.search title

if results.empty?
  puts "No shows found with the name #{title}"
  exit
end

show = nil

if results.size == 1
  show = results[0]
else
  choice = 0
  begin
    puts "We found #{results.size} possible shows:"
    results.each_index do |i|
      puts "#{i}. #{results[i]["SeriesName"]}"
    end
    print "Which show is correct? "
    choice = STDIN.gets.to_i
  end while choice < 0 or choice >= results.size
  show = results[choice]
end

show = Auteur::Show.new :title => show['SeriesName']

puts "#{show.title} found... summary:"
puts show.summary



nzb = NZBMatrix.new('jacobwg', Settings.nzbmatrix_key, :http)
nzb.search_print(NZBMatrix::EVERYTHING, show.title)








