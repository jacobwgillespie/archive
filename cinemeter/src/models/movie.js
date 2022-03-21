import moment from 'moment';

import APIs from '../external-api';
import CISI from '../external-api/cisi';
import CompositeScore from './lib/composite_score';
import r from './connection';

class Movie {
  /* eslint-disable babel/generator-star-spacing */

  constructor(data) {
    this.data = data;
  }

  static get(id) {
    parsedId = parseInt(id, 10);
    return r.table('movies').get(parsedId).run().then((data) => {
      return new Movie(data);
    });
  }

  static createOrUpdate(data) {
    /* eslint-disable prefer-const */
    let promises = [];
    let movieDocuments = [];
    let similarMovieDocuments = [];
    let genreDocuments = [];
    let movieGenreDocuments = [];

    const similarMovies = data.similar_movies;

    if (similarMovies) {
      similarMovies.forEach((similar) => {
        movieDocuments.push(similar);
        similarMovieDocuments.push({
          id: data.id + '-to-' + similar.id,
          movieId: data.id,
          similarMovieId: similar.id,
        });
      });
      delete data.similar_movies;
    }

    const genres = data.genres;

    if (genres) {
      genres.forEach((genre) => {
        genreDocuments.push(genre);
        movieGenreDocuments.push({
          id: data.id + '-has-' + genre.id,
          movieId: data.id,
          genreId: genre.id,
        });
      });
      delete data.genres;
    }

    movieDocuments.push(data);

    promises.push(r.table('movies').insert(
      movieDocuments, { conflict: 'update' }).run());

    if (similarMovieDocuments.length > 0) {
      promises.push(r.table('similar_movies').insert(
        similarMovieDocuments, { conflict: 'update' }).run());
    }

    if (genreDocuments.length > 0) {
      promises.push(r.table('genres').insert(
        genreDocuments, { conflict: 'update' }).run());
    }

    if (movieGenreDocuments.length > 0) {
      promises.push(r.table('movie_genres').insert(
        movieGenreDocuments, { conflict: 'update' }).run());
    }

    return Promise.all(promises).then(() => Movie.get(data.id));
  }

  toJSON() {
    return this.data;
  }

  updateFromTmdb() {
    return APIs.tmdb.getMovieById(this.data.id).then((data) => {
      data.tmdbUpdatedAt = Date.now();
      return Movie.createOrUpdate(data);
    });
  }

  updateFromImdb() {
    return Movie.get(this.data.id).then((movie) => {
      return APIs.imdb.get(movie.tmdb.imdb_id);
    }).then((data) => {
      return Movie.createOrUpdate({
        id: this.data.id,
        imdb: data,
        imdbUpdatedAt: Date.now(),
      });
    });
  }

  updateFromRt() {
    return Movie.get(this.data.id).then((movie) => {
      return APIs.rt.get(movie.tmdb.imdb_id);
    }).then((data) => {
      return Movie.createOrUpdate({
        id: this.data.id,
        rt: data,
        rtUpdatedAt: Date.now(),
      });
    });
  }

  async updateFromCisi() {
    const cisi = new CISI(this.data.tmdb.title + ' '
      + moment.utc(this.data.tmdb.release_date).year());
    const availability = await cisi.availability();

    return Movie.createOrUpdate({
      id: this.data.id,
      cisi: availability,
      cisiUpdatedAt: Date.now(),
    });
  }

  buildCompositeScore() {
    const compositeScore = new CompositeScore(this).build();

    return Movie.createOrUpdate({
      id: this.data.id,
      compositeScore,
    });
  }
}

export default Movie;
