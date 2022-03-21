export { default as Genre } from './genre';
export { default as Movie } from './movie';
export { default as r } from './connection';

export default function init(r) {
  const tableOptions = { shards: 3, replicas: 1 };

  const tables = {
    movies: [],
    genres: [],
    similarMovies: ['movieId', 'similarMovieId'],
    movieGenres: ['movieId', 'genreId'],
  };

  Object.keys(tables).forEach((table) => {
    r.tableCreate(table, tableOptions).run().error(() => {});
    tables[table].forEach((field) => {
      r.table(table).indexCreate(field).run().error(() => {});
    });
  });
}
