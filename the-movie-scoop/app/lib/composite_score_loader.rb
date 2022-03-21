class CompositeScoreLoader
  def self.load(id)
    new(id).load
  end

  def self.enqueue(id)
    CompositeScoreLoadWorker.perform_async(id)
  end

  attr_reader :movie

  def initialize(id)
    @movie = Movie.find(id)
  end

  def load
    movie.composite_score = CompositeScore.compute(movie)
    movie.save
  end
end
