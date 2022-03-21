class RtReviewLoader
  def self.load(id)
    new(id).load
  end

  def self.enqueue(id)
    RtReviewLoadWorker.perform_async(id)
  end

  attr_reader :movie

  def initialize(id)
    @movie = Movie.find(id)
  end

  def load
    return unless movie.rt_api_review_link
    response = Typhoeus::Request.new(
      "#{movie.rt_api_review_link}?apikey=#{Rotten.api_key}",
      method: :get,
      headers: { Accept: 'application/json' }
    ).run
    CriticReviewParser.parse(movie, JSON.parse(response.body))
  end
end
