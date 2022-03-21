class TmdbSimilarLoader
  def self.load(id, page = 1, enqueue = false)
    new(id, page, enqueue).load
  end

  def self.enqueue(id, page = 1, enqueue = true)
    TmdbSimilarLoadWorker.perform_async(id, page, enqueue)
  end

  attr_reader :movie, :page, :enqueue

  def initialize(id, page = 1, enqueue = true)
    @movie = Movie.find(id)
    @page = page
    @enqueue = enqueue
  end

  def load
    data = Tmdb.movie_similar(movie.id, page).deep_symbolize_keys!
    return unless data[:total_results]
    SimilarMovieParser.parse(movie, data[:results])
    schedule_up_to(data[:total_pages]) if enqueue
  end

  private

  def schedule_up_to(max_pages)
    if page != max_pages
      ((page + 1)..max_pages).each do |next_page|
        TmdbSimilarLoader.enqueue(movie.id, next_page, false)
      end
    end
  end
end
