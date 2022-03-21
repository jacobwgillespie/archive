import { Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

export default function(opts = {}) {
  const config = {
    source: new HttpDataSource('http://localhost:3000/model.json'),
    ...opts,
  };

  return new Model(config);
}
