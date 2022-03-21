class MovieDataLoader
  def self.load(id)
    new(id).load
  end

  def self.enqueue(id)
    MovieDataLoadWorker.perform_async(id)
  end

  attr_reader :movie

  def initialize(id)
    @movie = Movie.find(id)
  end

  def load
    movie.load_tmdb
    movie.load_tmdb_similar
    movie.load_imdb
    movie.load_rt_data
    movie.load_rt_review
    movie.load_availability
    movie.load_composite_score
  end
end
