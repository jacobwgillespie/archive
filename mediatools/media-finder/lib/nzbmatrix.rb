require 'cgi'

class NZBMatrix

  EVERYTHING = '0'

  MOVIES_ALL = 'movies-all'
  MOVIES_DVD = '1'
  MOVIES_DIVX_XVID = '2'
  MOVIES_HD_X264 = '42'
  MOVIES_HD_BLURAY = '50'
  MOVIES_WMV_HD = '48'
  MOVIES_SVCD_VCD = '3'
  MOVIES_OTHER = '4'
  
  TV_ALL = 'tv-all'
  TV_DVD = '5'
  TV_DIVX_XVID = '6'
  TV_HD = '41'
  TV_SPORT_ENT = '7'
  TV_OTHER = '8'
  
  DOCUMENTARIES_ALL = 'docu-all'
  DOCUMENTARIES_STD = '9'
  DOCUMENTARIES_HD = '53'
  
  GAMES_ALL = 'games-all'
  GAMES_PC = '10'
  GAMES_PS2 = '11'
  GAMES_PS3 = '43'
  GAMES_PSP = '12'
  GAMES_XBOX = '13'
  GAMES_XBOX360 = '14'
  GAMES_PS1 = '15'
  GAMES_DREAMCAST = '16'
  GAMES_WII = '44'
  GAMES_WII_VC = '51'
  GAMES_DS = '45'
  GAMES_GAMECUBE = '46'
  GAMES_OTHER = '17'
  
  APPS_ALL = 'apps-all'
  APPS_PC = '18'
  APPS_MAC = '19'
  APPS_PORTABLE = '51'
  APPS_LINUX = '20'
  APPS_OTHER = '21'
  
  MUSIC_ALL = 'music-all'
  MUSIC_MP3_ALBUMS = '22'
  MUSIC_MP3_SINGLES = '47'
  MUSIC_LOSSLESS = '23'
  
  MUSIC_DVD = '24'
  MUSIC_VIDEO = '25'
  MUSIC_OTHER = '27'
  
  ANIME_ALL = '28'
  
  OTHER_ALL = 'other-all'
  OTHER_AUDIO_BOOKS = '49'
  OTHER_EMULATION = '33'
  OTHER_PPC_PDA = '34'
  OTHER_RADIO = '26'
  OTHER_EBOOKS = '36'
  OTHER_IMAGES = '37'
  OTHER_MOBILE_PHONE = '38'
  OTHER_EXTRA_PARS_FILLS = '39'
  OTHER_OTHER = '40'

  
  attr_accessor :user_name, :api_key, :max_results, :https
  
  def initialize(str_user_name, str_api_key, use_https=:http)
    @user_name = str_user_name
    @api_key = str_api_key
    @max_results = 5
    @https = use_https == :https ? 'https' : 'http'
  end

  def search_print(str_category_id, str_search_terms)
    search(str_category_id, str_search_terms).each do |res|
      puts "  NZB Id, Size : [#{res[:nzbid]}] #{(res[:size].to_f * 100.0 / 1024.0 / 1024.0) / 100} Mb"
      puts "  Usenet Group : #{res[:group]}"
      puts "          Name : #{res[:nzbname]}"
      puts "          Link : http://www.#{res[:link]}"
      puts "NZBMatrix Date : #{res[:index_date]}"
      puts "   Usenet Date : #{res[:usenet_date]}"
      puts "      Category : #{res[:category]}"
      puts "          Hits : #{res[:hits]}"
      puts "      Comments : #{res[:comments]}"
      puts "      Has NFO? : #{res[:nfo]}"
      puts 
      puts 
    end    
  end
  
  def search(str_category_id, str_search_terms)
    str_url = "#{@https}://nzbmatrix.com/api-nzb-search.php?search=#{CGI.escape(str_search_terms)}&catid=#{str_category_id}&num=#{@max_results}&username=#{@user_name}&apikey=#{@api_key}"
    str = ""
    open(str_url) do |i|
      str = i.read
    end
    entries = str.split(/\n\|/m).map{ |i| CGI.unescapeHTML(i.gsub(/\n/, ' ').strip) }
    entries = entries.map{ |i| i != '' ? i : nil }.compact
    entries = entries.map{ |i| i.split(';').map{ |j| j.strip.split(':',2) }.map{ |k,l| [ k.strip.downcase.to_sym, l ] } }
    entries = entries.map{ |i| Hash[*i.flatten] }    
    return entries
  end
  
  def details_print(str_nzb_id)
    details(str_nzb_id).each{|a,b| puts sprintf("%20s : %s", a, b) }    
  end
  
  def details(str_nzb_id)
    str_url = "#{@https}://nzbmatrix.com/api-nzb-details.php?id=#{str_nzb_id}&username=#{@user_name}&apikey=#{@api_key}"
    str = ""
    open(str_url) do |i|
      str = i.read
    end
    info = Hash[*CGI.unescapeHTML(str.gsub(/\n/m, ' ').strip).split(';').map{ |i| i.strip.split(':', 2) }.map{ |i| [ i[0].strip.downcase.to_sym, i[1] ] }.flatten]
    info[:nzbfilename] = info[:nzbname].gsub(/[ ]+/, '_')+'.nzb'
    return info
  end
  
  def download(str_nzb_id)
    info = details(str_nzb_id)
    str_url = "#{@https}://nzbmatrix.com/api-nzb-download.php?id=#{str_nzb_id}&username=#{@user_name}&apikey=#{@api_key}"
    str = ""
    str_file = info[:nzbfilename]
    begin
      File.open("/tmp/#{str_file}.gz", 'w') do |o|
        open(str_url) do |i|
          o.write i.read
        end
      end
      system("gunzip", "/tmp/#{str_file}.gz")
      system("mv", "/tmp/#{str_file}", ".")
      return [ true, 'OK' ]
    rescue Exception => e
      return [ false, e ]
    end
  end

end