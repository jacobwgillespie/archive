class RottenTomatoes

  require 'net/http'
  require 'uri'
  require 'cgi'

  def self.base_api_url
    "http://api.themoviedb.org/3"
  end

  def self.lookup(imdb_id)

    data = {
      apikey:  Settings.rt_key,
      type: 'imdb',
      id: imdb_id.gsub(/tt/, '')
    }

    uri = Addressable::URI.new

    uri.query_values = data

    url            = 'http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json'
    url_with_query = [url, uri.query].compact.join '?'

    response = Tmdb.get_url(url_with_query)
    if(response.code.to_i != 200)
      raise RuntimeError, "Tmdb API returned status code '#{response.code}' for URL: '#{url}'"
    end

    body = JSON(response.body)
    if body.has_key?("error")
      return nil
    else
      object = DeepOpenStruct.load(body)
      object.raw_data = body
      return object
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