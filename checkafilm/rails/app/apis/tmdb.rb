require 'uri'
require 'cgi'

class Tmdb

  @@default_language = "en"
  @@api_response = {}

  # TODO: Should be refreshed and cached from API
  CONFIGURATION = DeepOpenStruct.load({ "images" =>
                    {
                      "base_url"        => "http://cf2.imgobject.com/t/p/",
                      "posters_sizes"   => ["w92", "w154", "w185", "w342", "w500", "original"],
                      "backdrops_sizes" => ["w300", "w780", "w1280", "original"],
                      "profiles_sizes"  => ["w45", "w185", "h632", "original"],
                      "logos_sizes"     => ["w45", "w92", "w154", "w185", "w300", "w500", "original"]
                    }
  })

  def self.api_key
    Settings.tmdb_key
  end

  def self.base_api_url
    "http://api.themoviedb.org/3"
  end

  def self.api_call(method, data)
    raise ArgumentError, "Invalid data." if(data.nil? || (data.class != Hash))

    method, action = method.split '/'

    data = {
      api_key:  Tmdb.api_key
    }.merge(data)

    # Addressable can only handle hashes whose values respond to to_str, so lets be nice and convert things.
    query_values = {}
    data.each do |key,value|
      if not value.respond_to?(:to_str) and value.respond_to?(:to_s)
        query_values[key] = value.to_s
      else
        query_values[key] = value
      end
    end

    uri = Addressable::URI.new

    # Construct URL for queries with id
    if data.has_key?(:id)
      uri.query_values = query_values
    # Construct URL other queries
    else
      query_values = {
        query: CGI::escape(data[:query])
      }.merge(query_values)
      uri.query_values = query_values
    end
    url            = [Tmdb.base_api_url, method, data[:id], action].compact.join '/'
    url_with_query = [url, uri.query].compact.join '?'

    response = Tmdb.get_url(url_with_query)
    if(response.code.to_i != 200)
      raise RuntimeError, "Tmdb API returned status code '#{response.code}' for URL: '#{url}'"
    end

    body = JSON(response.body)
    if body.has_key?("results") && body["results"].empty?
      return nil
    else
      return body
    end
  end

  def self.get_url(uri_str)
    RestClient.get(uri_str)
  end

  def self.data_to_object(data)
    object          = DeepOpenStruct.load(data)
    object.raw_data = data
    ["posters", "backdrops"].each do |image_array_name|
      image_array = Array object.send(image_array_name)
      single_name = image_array_name.slice 0..-2 # singularize name
      single_path = object.send "#{single_name}_path" # default poster/backdrop image
      image_array << object.send("#{image_array_name.slice 0..-2}=", DeepOpenStruct.load({file_path: single_path}))
      # build a struct containing availables sizes with their urls
      image_array.each do |image|
        urls = CONFIGURATION.images.send("#{image_array_name}_sizes").inject({}) do |hash, size|
          hash[size] = {'url' => [CONFIGURATION.images.base_url, size, image.file_path].join}
          hash
        end
        image.sizes = DeepOpenStruct.load urls
      end
    end
    return object
  end

end