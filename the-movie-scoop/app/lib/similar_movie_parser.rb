class SimilarMovieParser
  def self.parse(movie, data)
    new(movie, data).parse
  end

  attr_reader :movie, :data

  def initialize(movie, data)
    @movie = movie
    @data = data
  end

  def parse
    data.each do |similar|
      update_similar(similar)
    end
  end

  def update_similar(similar)
    new_similar = Movie.where(id: similar[:id]).first_or_create do |movie|
      movie.title = similar[:title]
      movie.original_language = similar[:original_language]
      movie.overview = similar[:overview]
      movie.theater_release_date = similar[:release_date]
      movie.tmdb_popularity = similar[:popularity]
      movie.tmdb_vote_average = similar[:vote_average]
      movie.tmdb_vote_count = similar[:vote_count]
      movie.backdrop_url = similar[:backdrop_path]
      movie.poster_url = similar[:poster_path]
    end
    SimilarMovie.where(movie: movie, similar: new_similar).first_or_create
  end
end
