
require 'optparse'
require 'uri'
require 'rubygems'
require 'highline/import'
require './lib/open_subtitles'


server = OpenSubtitles::Server.new(
  :host => 'api.opensubtitles.org', 
  :path => '/xml-rpc', 
  :timeout => 90, 
  :useragent => "SubDownloader 2.0.10"
)


puts
puts 'Subtitle Downloader'
puts
puts 'Search options:'

search_option = :none

choose do |menu|
  menu.prompt = "How would you like to search?  "

  menu.choice(:imdb_id, 'IMDb ID') { search_option = :imdb_id }
  menu.choice(:title, 'Movie Title') { search_option = :title }
  menu.choice(:filename, 'Filename') { search_option = :filename }
end

if search_option == :imdb_id
  imdbid = 0
  imdbid = ask("ID?  ", Integer)
  say("Searching for ID #{imdbid}...")
end



#if ARGV.empty?
#  puts "USAGE: download_subtitles"
#end


=begin
def env_lang
  OSDb::Language.from_locale(ENV['LANG'])
end

@options = {:imdbid => nil }
@parser ||= OptionParser.new do |opts|
  opts.banner = "Automatically download subtitles for a given movie (from IMDb ID) using opensubtitle.org"
  opts.separator ""
  opts.separator "Usage: getsub IMDBID"
#  opts.separator ""
#  opts.separator "Main options:"
  
#  opts.on("-id", "--imdbid ID", "IMDB ID for the movie") do |imdbid|
#    @options[:imdbid] = imdbid
#  end

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

imdbid = ARGV.first

if imdbid.empty?
  puts "No IMDb ID provided..."
  puts @parser.help
  exit 1
end

server = OSDb::Server.new(
  :host => 'api.opensubtitles.org', 
  :path => '/xml-rpc', 
  :timeout => 90, 
  :useragent => "SubDownloader 2.0.10"
) 
STDOUT.sync = true


begin
  puts "* searching for subtitles for the IMDb movie # #{imdbid}"
  subs = server.search_subtitles(:imdbid => imdbid.to_i)
  if subs.any?
    sub = select_sub(subs)
    sub_path = 'subtitle.srt'
    download!(sub.url, sub_path)
  else
    puts "* no subtitles found"
  end
  puts
rescue Exception => e
  puts "#{e.class.name}: #{e.message}:"
  puts e.backtrace
end

=end
