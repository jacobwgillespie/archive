require 'open-uri'

class HashReader
  def initialize(hash)
    hash.each do |k,v|
      self.instance_variable_set("@#{k}", v)  ## create and initialize an instance variable for this key/value pair
      self.class.send(:define_method, k, proc{self.instance_variable_get("@#{k}")})  ## create the getter that returns the instance variable
      self.class.send(:define_method, "#{k}=", proc{|v| self.instance_variable_set("@#{k}", v)})  ## create the setter that sets the instance variable
    end
  end
end

module TVRage
  
  FEED_BASE = 'http://services.tvrage.com/feeds/'

  class Show < HashReader
    def self.search(name)
      hash = XmlSimple.xml_in(open("#{FEED_BASE}search.php?show=#{URI.escape name}"))
      return [] if hash == '0'
      hash['show'].map { |show| TVRage::Show.new show }
    end
  end

  class Episode < HashReader
  end

end