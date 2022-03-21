module API

  class Object
    def initialize(url)
      @url = url
    end

    def url
      @url
    end

    def response
      @response ||= RestClient.get(@url)
    end

    def doc
      @doc ||= Nokogiri::HTML(response)
    end
  end

end