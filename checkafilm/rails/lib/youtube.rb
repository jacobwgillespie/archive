class Youtube

  require 'net/http'
  require 'uri'
  require 'cgi'

  @@api_response = {}

  def self.get(source)
    raise ArgumentError, "Invalid source." if source.nil?

    watch_page = "http://www.youtube.com/watch?v=#{source}"

    oembed_url = "http://www.youtube.com/oembed?url=#{CGI::escape(watch_page)}&format=json"

    response = self.get_url(oembed_url)

    if(response.code.to_i != 200)
      raise RuntimeError, "Youtube oEmbed request returned status code '#{response.code}' for URL: '#{url}'"
    end

    body = JSON(response.body)
    if body.has_key?("results") && body["results"].empty?
      return nil
    else
      data = DeepOpenStruct.load(body)
      data.raw_data = data
      return data
    end
  end

  def self.embed(source)
    data = self.get(source)
    # //%iframe{width: "560", height: "315", src: "http://www.youtube-nocookie.com/embed/#{trailer.url}", frameborder: "0", :allowfullscreen => 'allowfullscreen'}
    embed = <<-EMBED
    <video class="video-js vjs-default-skin" controls width="#{data.width}" height="#{data.height}" data-setup='{"techOrder":["youtube","html5"]}'>
      <source src="http://www.youtube.com/watch?v=#{source}" type='video/youtube'>
    </video>
    EMBED

    embed = <<-EMBED
    <iframe width="#{data.width}" height="#{data.height}" src="http://www.youtube-nocookie.com/embed/#{source}" frameborder="0" allowfullscreen></iframe>
    EMBED
  end

  def self.search(query)
    search_url = "http://gdata.youtube.com/feeds/api/videos/-/#{CGI::escape(query.gsub(/\W/, '-'))}?alt=json&v=2.1"

    response = self.get_url(search_url)

    if(response.code.to_i != 200)
      raise RuntimeError, "Youtube oEmbed request returned status code '#{response.code}' for URL: '#{url}'"
    end

    body = JSON(response.body)
    if body.has_key?("feed") && body["feed"].has_key?("entry") && ["entry"].empty?
      return nil
    else
      results = body['feed']['entry'].map do |entry|
        {
          id: entry['media$group']['yt$videoid']['$t'],
          name: entry['media$group']['media$title']['$t']
        }
      end
      return results
    end
  end

  def self.get_thumbnail(source)
    raise ArgumentError, "Invalid source." if source.nil?

    watch_page = "http://www.youtube.com/watch?v=#{source}"

    oembed_url = "http://www.youtube.com/oembed?url=#{CGI::escape(watch_page)}&format=json"

    response = self.get_url(oembed_url)

    if(response.code.to_i != 200)
      raise RuntimeError, "Youtube oEmbed request returned status code '#{response.code}' for URL: '#{oembed_url}'"
    end

    body = JSON(response.body)
    if body.has_key?("results") && body["results"].empty?
      return nil
    else
      return body['thumbnail_url']
    end
  end


  # Get a URL and return a response object, follow upto 'limit' re-directs on the way
  def self.get_url(uri_str, limit = 10)
    return false if limit == 0
    begin
      response = Net::HTTP.get_response(URI.parse(uri_str))
    rescue SocketError, Errno::ENETDOWN
      response = Net::HTTPBadRequest.new( '404', 404, "Not Found" )
      return response
    end
    case response
      when Net::HTTPSuccess     then response
      when Net::HTTPRedirection then get_url(response['location'], limit - 1)
    else
      Net::HTTPBadRequest.new( '404', 404, "Not Found" )
    end
  end

end