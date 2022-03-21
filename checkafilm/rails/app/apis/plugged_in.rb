require 'uri'
require 'cgi'

module PluggedIn

  def self.search(title, year=nil)
    search_title = title
    search_title = "#{search_title} (#{year})" unless year.nil?

    uri = "http://search.pluggedin.com/search?q=#{CGI::escape(search_title)}&btnG=Search&filter=&ntqr=0&output=xml_no_dtd&sort=date%3AD%3AL%3Ad1&client=pluggedin_com&filter=&ud=1&oe=UTF-8&ie=UTF-8&site=pluggedin_com&getfields=*"
    result = Curl::Easy.perform(uri).body_str

    doc = Nokogiri::XML(result)
    pi_uri = doc.css('U').first

    return false if pi_uri.nil?

    pi_uri = pi_uri.content

    return false if !(pi_uri.match(/https?:\/\/(www.)?pluggedin.com\/(videos|movies)/))

    Movie.new(pi_uri)
  end

  class Movie < API::Object

    #def match(true_title, true_year)
    #  {
    #    title: Utils.damerau_levenshtein(title, true_title),
    #    year: (year.to_i - true_year.to_i).abs
    #  }
    #end

    def title
      @title ||= (doc.css('#article h1').first.nil? ? nil : doc.css('#article h1').first.content)
    end

    def review(section)
      review_data[section]
    end

    def year
      return @year if @year
      date = doc.css('#creditBox dt:contains("In Theaters") + dd').text
      if date.empty?
        @year = (url.match(/\/videos\/(\d{4})\//) ? url.match(/\/videos\/(\d{4})\//)[1] : false)
      else
        @year = Date.parse(date).year
      end
      @year
    end

    def review_data
      return @review if @review

      @review = {}

      if style == :new
        @review[:introduction] = doc.css('#article p').first.to_html
        @review[:positive_elements] = doc.css('h3.positiveElements + p').to_html
        @review[:spiritual_content] = doc.css('h3.spiritualContent + p').to_html
        @review[:sexual_content] = doc.css('h3.sexualContent + p').to_html
        @review[:violent_content] = doc.css('h3.violentContent + p').to_html
        @review[:crude_language] = doc.css('h3.crudeLanguage + p').to_html
        @review[:drug_content] = doc.css('h3.drugContent + p').to_html
        @review[:negative_elements] = doc.css('h3.negativeElements + p').to_html
        @review[:conclusion] = doc.css('h3.conclusion + p').to_html
      else
        # style == :old
        doc.css('#article p').each do |p|
          section = p.css('b').text
          p.search('.//b').remove
          html = p.to_html
          if section.match /positive/i
            @review[:positive_elements] = html
          elsif section.match /spiritual/i
            @review[:spiritual_content] = html
          elsif section.match /sexual/i
            @review[:sexual_content] = html
          elsif section.match /sexual/i
            @review[:sexual_content] = html
          elsif section.match /conduct/i
            @review[:violent_content] = html
          elsif section.match /violence/i
            @review[:violent_content] = html
          elsif section.match /crude/i
            @review[:crude_language] = html
          elsif section.match /drug/i
            @review[:drug_content] = html
          elsif section.match /negative/i
            @review[:negative_elements] = html
          elsif section.match /conclusion/i
            @review[:conclusion] = html
          elsif section.match /summary/i
            @review[:conclusion] = html
          else
            @review[:introduction] = html
          end
        end
      end

      @review.each do |key, value|
        @review[key] = value.gsub(/<i>/, '<em>').gsub(/<\/i>/, '</em>').gsub(/<br><br>/, '</p><p>').gsub(/<a href="~/, '<a target="_blank" href="http://www.pluggedin.com/videos/2012/q1/~')
      end

      @review
    end

    def style
      @style ||= (response.match(/<p><p>/i) ? :old : :new)
    end

  end

end