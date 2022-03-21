# API class for The Movie DB
class Tmdb
  BASE_URI = (
    ENV['TMDB_API_HOST'] ||
    'http://api.themoviedb.org/3'
  )

  class << self
    attr_writer :api_key

    def api_key
      @api_key || ENV['TMDB_API_KEY']
    end

    def movie(id)
      request("#{BASE_URI}/movie/#{id}?#{movie_params.to_query}")
    end

    def movie_similar(id, page = 1)
      request(
        "#{BASE_URI}/movie/#{id}/similar?#{movie_similar_params(page).to_query}"
      )
    end

    def person(id)
      request("#{BASE_URI}/person/#{id}?#{person_params.to_query}")
    end

    private

    def request(url)
      response = Typhoeus::Request.new(
        url,
        method: :get,
        headers: { Accept: 'application/json' }
      ).run
      JSON.parse(response.body)
    end

    def movie_params
      {
        api_key: api_key,
        language: 'en',
        append_to_response: 'releases,videos,credits,similar'
      }
    end

    def movie_similar_params(page)
      {
        api_key: api_key,
        language: 'en',
        page: page
      }
    end

    def person_params
      {
        api_key: api_key
      }
    end
  end
end
