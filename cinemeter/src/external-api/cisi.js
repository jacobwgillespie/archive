import request from './utils/request';
import transliteration from 'transliteration';

const BASE_URL = 'http://www.canistream.it/services';

class CISI {
  /* eslint-disable babel/generator-star-spacing */

  constructor(title) {
    this.title = transliteration(title);
  }

  callApi(url) {
    return fetch(url);
  }

  async availability() {
    const idURL = `${BASE_URL}/search?movieName=${escape(this.title)}`;
    const id = (await request(idURL))[0]._id;
    const mediaTypes = ['streaming', 'rental', 'purchase', 'dvd', 'xfinity'];

    const requests = mediaTypes.map(type => {
      return request(
        `${BASE_URL}/query?movieId=${id}&attributes=1&mediaType=${type}`
      );
    });

    const responses = await* requests;
    const response = {};

    mediaTypes.forEach((type, idx) => response[type] = responses[idx]);
    return response;
  }
}

export default CISI;
