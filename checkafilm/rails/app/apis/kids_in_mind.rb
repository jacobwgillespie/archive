require 'uri'
require 'cgi'

module KidsInMind

  def self.search(title, year=nil)
    search_title = title
    search_title = "#{search_title} (#{year})" unless year.nil?

    uri = "http://www.google.com/search?ie=UTF-8&q=site%3Awww.kids-in-mind.com+#{CGI::escape(search_title)}"
    result = Curl::Easy.perform(uri).body_str

    doc = Nokogiri::HTML(result)
    results = doc.css('h3.r a')
    results = results.to_a.reject { |i| not i.text.match(/[\[]/) }
    kim_uri = results.first

    return false if kim_uri.nil?

    kim_uri = kim_uri['href']
    kim_uri = CGI.parse(URI.parse(kim_uri).query)['q'].first

    Movie.new(kim_uri)
  end

  class Movie < API::Object

    def match(true_title, true_year)
      {
        title: Utils.damerau_levenshtein(title, true_title),
        year: (year.to_i - true_year.to_i).abs
      }
    end

    def title
      @title ||= doc.css('title').text.gsub(/ \[.*$/, '')
    end

    def year
      @year ||= (match = doc.css('title').text.match(/[^\[]+\[(\d+).+$/))[1].nil? ? nil : match[1]
    end

    def sex
      @sex ||= (match = doc.css('title').text.match(/\- (\d+)\.(\d+)\.(\d+)$/))[1].nil? ? nil : match[1].to_i
    end

    def language
      @sex ||= (match = doc.css('title').text.match(/\- (\d+)\.(\d+)\.(\d+)$/))[1].nil? ? nil : match[1].to_i
    end

    def violence
      @sex ||= (match = doc.css('title').text.match(/\- (\d+)\.(\d+)\.(\d+)$/))[1].nil? ? nil : match[1].to_i
    end

  end

end