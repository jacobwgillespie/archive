require 'sinatra'
require './lib/open_subtitles'
require './lib/profanity'
require 'net/http'
require 'open-uri'
require 'zippy'


def timecode_to_seconds(timecode)
  seconds = 0
  timecode.gsub(/(\d{2}):(\d{2}):(\d{2}),(\d{3})/) {
    seconds  = $3.to_i
    seconds += $2.to_i * 60
    seconds += $1.to_i * 60 * 60
    seconds += ($4.to_f / 1000).to_f
  }
  
  return seconds
end


get '/subtitle/:imdbid' do
  
  if File.exist? "./tmp/#{params[:imdbid]}.srt"
    return File.open("./tmp/#{params[:imdbid]}.srt", 'r') { |f| f.read }
  else
    #return 'not found'
  
    server = OpenSubtitles::Server.new(
      :host => 'api.opensubtitles.org', 
      :path => '/xml-rpc', 
      :timeout => 90, 
      :useragent => "SubDownloader 2.0.10"
    )
    
    results = server.search_subtitles(:imdbid => params[:imdbid].to_i, :sublanguageid => "eng")
    
    return "none found" unless results['data']
    
    selected = results['data'].first
    
    results['data'].each { |item|
      if (DateTime.parse(item['SubAddDate']) > DateTime.parse(selected['SubAddDate']))
        selected = item
      end
    }
    
    #return selected.to_s
    
    download_uri = selected['ZipDownloadLink']
  
    download_uri.gsub!('http://www.opensubtitles.org', '')
  
    Net::HTTP.start("www.opensubtitles.org") { |http|
      resp = http.get(download_uri)
      File.open("./tmp/#{params[:imdbid]}.zip", "wb") { |file|
        file.write(resp.body)
       }
    }
    
    subtitles = nil
    
    zip = Zippy.open("./tmp/#{params[:imdbid]}.zip")
    zip.each { |item|
      if item[-4..-1] == '.srt'
        srt = File.open("./tmp/#{params[:imdbid]}.srt", 'wb')
        srt.write(zip[item])
        srt.close
        subtitles = zip[item] 
      end
    }
    
    subtitles
    
  end
  
end


get '/edl/:imdbid' do
  
  if File.exist? "./tmp/#{params[:imdbid]}.srt"
    subtitles = File.open("./tmp/#{params[:imdbid]}.srt", 'r') { |f| f.read }
  else
    #return 'not found'
  
    server = OpenSubtitles::Server.new(
      :host => 'api.opensubtitles.org', 
      :path => '/xml-rpc', 
      :timeout => 90, 
      :useragent => "SubDownloader 2.0.10"
    )
    
    results = server.search_subtitles(:imdbid => params[:imdbid].to_i, :sublanguageid => "eng")
    
    return "none found" unless results['data']
    
    selected = results['data'].first
    
    results['data'].each { |item|
      if (DateTime.parse(item['SubAddDate']) > DateTime.parse(selected['SubAddDate']))
        selected = item
      end
    }
    
    #return selected.to_s
    
    download_uri = selected['ZipDownloadLink']
  
    download_uri.gsub!('http://www.opensubtitles.org', '')
  
    Net::HTTP.start("www.opensubtitles.org") { |http|
      resp = http.get(download_uri)
      File.open("./tmp/#{params[:imdbid]}.zip", "wb") { |file|
        file.write(resp.body)
       }
    }
    
    subtitles = nil
    
    zip = Zippy.open("./tmp/#{params[:imdbid]}.zip")
    zip.each { |item|
      if item[-4..-1] == '.srt'
        srt = File.open("./tmp/#{params[:imdbid]}.srt", 'wb')
        srt.write(zip[item])
        srt.close
        subtitles = zip[item] 
      end
    }
    
  end
  
  edl = ''
  
  
  subtitles.gsub!("\r\n","\n") # fix for windows newlines
  
  subtitles.gsub!(/\[[^\]]*\]/,'soundfx') # fix for sound effects

  subtitles.split("\n\n").each { |subtitle|
    parts = subtitle.split("\n")
    if (not parts[2].nil? and Profanity.default.profane?(parts[2])) or (not parts[3].nil? and Profanity.default.profane?(parts[3]))
      parts[1].gsub(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/) { |timecode|
        edl += "#{timecode_to_seconds($1)} #{timecode_to_seconds($2)} 1\n"
      }
    end
  }
  
  return edl
  
end