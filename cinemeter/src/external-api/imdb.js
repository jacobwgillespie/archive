import request from './utils/request';

const BASE_URL = 'http://www.omdbapi.com';

class IMDb {
  constructor(id) {
    this.id = id;
  }

  async data() {
    const url = `${BASE_URL}/?i=${this.id}&plot=short&r=json&tomatoes=true`;
    const data = await request(url);

    return {
      actors: data.Actors,
      awards: data.Awards,
      boxOffice: data.BoxOffice,
      country: data.Country,
      director: data.Director,
      dvd: data.DVD,
      genre: data.Genre,
      imdbId: data.imdbID,
      imdbRating: parseFloat(data.imdbRating),
      imdbVotes: parseInt(data.imdbVotes, 10),
      language: data.Language,
      metascore: parseFloat(data.Metascore),
      plot: data.Plot,
      poster: data.Poster,
      production: data.Production,
      rated: data.Rated,
      released: data.Released,
      response: data.Response,
      runtime: data.Runtime,
      title: data.Title,
      tomatoConsensus: data.tomatoConsensus,
      tomatoFresh: parseInt(data.tomatoFresh, 10),
      tomatoImage: data.tomatoImage,
      tomatoMeter: parseInt(data.tomatoMeter, 10),
      tomatoRating: parseFloat(data.tomatoRating),
      tomatoReviews: parseInt(data.tomatoReviews, 10),
      tomatoRotten: parseInt(data.tomatoRotten, 10),
      tomatoUserMeter: parseInt(data.tomatoUserMeter, 10),
      tomatoUserRating: parseFloat(data.tomatoUserRating),
      tomatoUserReviews: parseInt(data.tomatoUserReviews, 10),
      type: data.Type,
      website: data.Website,
      writer: data.Writer,
      year: parseInt(data.Year, 10),
    };
  }
}

export default IMDb;
