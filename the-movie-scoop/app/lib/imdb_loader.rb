class ImdbLoader
  def self.load(id)
    new(id).load
  end

  def self.enqueue(id)
    ImdbLoadWorker.perform_async(id)
  end

  attr_reader :movie

  def initialize(id)
    @movie = Movie.find(id)
  end

  def load
    return unless movie.imdb_id
    data = Imdb::Movie.new(movie.imdb_id.gsub(/tt/, ''))
    return unless data.title
    process_data(data)
    movie.save
  end

  private

  def process_data(data)
    movie.imdb_vote_average = data.rating
    movie.imdb_vote_count = data.votes
  end
end
