require 'xmlrpc/client'

module OpenSubtitles
  base_path = File.expand_path(File.dirname(__FILE__) + '/open_subtitles')
  #autoload :Language,  "#{base_path}/language"
  #autoload :Movie,  "#{base_path}/movie"
  autoload :Server, "#{base_path}/server"
  #autoload :Sub,    "#{base_path}/sub"
end