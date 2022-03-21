class Movie < ActiveRecord::Base
  has_many :availabilities
  has_many :critic_reviews
  has_many :casts
  has_many :crews
  has_many :similar_movies
  has_many :related_movies, through: :similar_movies, source: :similar
  has_many :videos

  def self.random_top_movie
    where(
      'composite_score >= ?', 6
    ).order('RANDOM()').limit(100).sample(1).first
  end

  def load_data
    MovieDataLoader.load(id)
  end

  def load_data_async
    MovieDataLoader.enqueue(id)
  end

  def load_tmdb
    TmdbLoader.load(id)
  end

  def load_tmdb_async
    TmdbLoader.enqueue(id)
  end

  def load_tmdb_similar
    TmdbSimilarLoader.load(id)
  end

  def load_tmdb_similar_async
    TmdbSimilarLoader.enqueue(id)
  end

  def load_imdb
    ImdbLoader.load(id)
  end

  def load_imdb_async
    ImdbLoader.enqueue(id)
  end

  def load_rt_data
    RtDataLoader.load(id)
  end

  def load_rt_data_async
    RtDataLoader.enqueue(id)
  end

  def load_rt_review
    RtReviewLoader.load(id)
  end

  def load_rt_review_async
    RtReviewLoader.enqueue(id)
  end

  def load_availability
    AvailabilityLoader.load(id)
  end

  def load_availability_async
    AvailabilityLoader.enqueue(id)
  end

  def load_composite_score
    CompositeScoreLoader.load(id)
  end

  def load_composite_score_async
    CompositeScoreLoader.enqueue(id)
  end

  def trailer
    @trailer ||= videos.find_by(kind: 'Trailer')
  end

  def trailer?
    !trailer.nil?
  end
end
