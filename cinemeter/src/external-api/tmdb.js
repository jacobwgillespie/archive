import movieDB from 'moviedb';
import moment from 'moment';

const formatMovie = (data) => {
  const movie = {};

  // Format similar movies
  if (data.similar && data.similar.results) {
    movie.similarMovies = data.similar.results.map((similar) => {
      return formatMovie(similar);
    });
  }
  delete data.similar;

  // Format genre IDs into objects
  if (data.genre_ids) {
    data.genres = data.genre_ids.map((id) => {
      return { id };
    });
  }
  delete data.genre_ids;

  // Format genres
  if (data.genres) {
    movie.genres = data.genres;
  }
  delete data.genres;

  // Save ID
  movie.id = data.id;

  // Transform dates into real dates
  if (data.release_date) {
    /* eslint-disable camelcase */
    data.release_date = moment.utc(data.release_date).toDate();
  }

  // Save all TMDb data
  movie.tmdb = data;

  return movie;
};

class TMDb {
  constructor(id) {
    this.id = id;
    this.mdb = movieDB(process.env.TMDB_API_KEY);
  }

  data() {
    return new Promise((resolve, reject) => {
      this.mdb.movieInfo({
        /* eslint-disable camelcase */
        id: this.id,
        append_to_response: 'releases,videos,credits,similar',
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(formatMovie(data));
        }
      });
    });
  }
}

export default TMDb;
