import request from './utils/request';

const BASE_URL = 'http://api.rottentomatoes.com/api/public/v1.0';

class RT {
  constructor(id) {
    this.id = id;
  }

  async data() {
    const apiKey = process.env.RT_API_KEY;
    const id = this.id.replace('tt', '');
    const url = `${BASE_URL}/movie_alias.json?type=imdb&apiKey=${apiKey}`
      + `&id=${id}`;
    const data = await request(url);

    return data;
  }
}

export default RT;
