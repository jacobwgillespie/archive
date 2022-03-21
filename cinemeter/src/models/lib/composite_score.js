class CompositeScore {
  constructor(movie) {
    this.movie = movie;
  }

  build() {
    const movie = this.movie;

    const totalStarVotes = (movie.imdb.imdb_votes || 0)
      + (movie.tmdb.vote_count || 0);
    const totalVotes = movie.rt.ratings.critics_score
      ? totalStarVotes * 2 : totalStarVotes;

    if (totalVotes === 0) {
      return 0;
    }

    const imdbStarScore = 10 * (movie.imdb.imdb_rating || 0)
      * (movie.imdb.imdb_votes || 0);
    const tmdbStarScore = 10 * (movie.tmdb.vote_average || 0)
      * (movie.tmdb.vote_count || 0);
    const starScore = imdbStarScore + tmdbStarScore;
    const criticScore = (movie.rt.ratings.critics_score || 0) * totalStarVotes;

    return (starScore + criticScore) / totalVotes / 10;
  }
}

export default CompositeScore;
