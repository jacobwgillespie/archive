class RtDataLoader
  def self.load(id)
    new(id).load
  end

  def self.enqueue(id)
    RtDataLoadWorker.perform_async(id)
  end

  attr_reader :movie

  def initialize(id)
    @movie = Movie.find(id)
  end

  def load
    return unless movie.imdb_id
    data = RottenMovie.find(imdb: movie.imdb_id.gsub(/tt/, ''))
    return unless data.id
    process_data(data)
    movie.save
  end

  private

  def process_data(data)
    movie.rt_critic_rating = data.ratings.critics_rating
    movie.rt_critic_score = data.ratings.critics_score
    movie.rt_critic_consensus = data.critics_consensus
    movie.rt_audience_rating = data.ratings.audience_rating
    movie.rt_audience_score = data.ratings.audience_score
    movie.rt_url = data.links.alternate
    if data.release_dates.theater
      movie.theater_release_date = data.release_dates.theater
    end
    movie.dvd_release_date = data.release_dates.dvd if data.release_dates.dvd
    movie.rt_api_review_link = data.links.reviews if data.links
  end
end
