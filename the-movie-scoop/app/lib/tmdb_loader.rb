class TmdbLoader
  def self.load(id)
    new(id).load
  end

  def self.enqueue(id)
    TmdbLoadWorker.perform_async(id)
  end

  attr_reader :movie

  def initialize(id)
    @movie = Movie.find(id)
  end

  def load
    data = Tmdb.movie(movie.id).deep_symbolize_keys!
    return unless data[:id]
    process_data(data)
    movie.save
    SimilarMovieParser.parse(movie, data[:similar][:results])
    CastAndCrewParser.parse(movie, data[:credits])
    VideoParser.parse(movie, data[:videos][:results])
  end

  private

  def process_data(data)
    movie.title = data[:title]
    movie.original_language = data[:original_language]
    movie.overview = data[:overview]
    movie.runtime = data[:runtime]
    movie.status = data[:status]
    movie.certification = find_certification_from_tmdb(data)
    movie.theater_release_date = data[:release_date]
    movie.tmdb_popularity = data[:popularity]
    movie.tmdb_vote_average = data[:vote_average]
    movie.tmdb_vote_count = data[:vote_count]
    movie.homepage_url = data[:homepage]
    movie.imdb_id = data[:imdb_id]
    movie.backdrop_url = data[:backdrop_path]
    movie.poster_url = data[:poster_path]
    movie.budget = data[:budget]
    movie.revenue = data[:revenue]
    movie.tagline = data[:tagline]
  end

  def find_certification_from_tmdb(data)
    us_release = data[:releases][:countries].select do |r|
      r[:iso_3166_1] == 'US'
    end
    return us_release[0][:certification] if us_release[0]
  end
end
