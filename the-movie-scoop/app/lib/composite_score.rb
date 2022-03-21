class CompositeScore
  def self.compute(movie)
    new(movie).compute
  end

  attr_reader :movie

  def initialize(movie)
    @movie = movie
  end

  def compute
    return 0 unless total_votes > 0
    (star_score + critic_score) / total_votes / 10
  end

  def star_score
    @_star_score ||= imdb_star_score + tmdb_star_score
  end

  def imdb_star_score
    @imdb_star_score ||= begin
      10 * (movie.imdb_vote_average || 0) * (movie.imdb_vote_count || 0)
    end
  end

  def tmdb_star_score
    @tmdb_star_score ||= begin
      10 * (movie.tmdb_vote_average || 0) * (movie.tmdb_vote_count || 0)
    end
  end

  def critic_score
    @critic_score ||= (movie.rt_critic_score || 0) * total_star_votes
  end

  def total_star_votes
    @total_star_votes ||= begin
      (movie.imdb_vote_count || 0) + (movie.tmdb_vote_count || 0)
    end
  end

  def total_votes
    @total_votes ||= begin
      movie.rt_critic_score? ? total_star_votes * 2 : total_star_votes
    end
  end
end
