/* eslint-disable no-console */

// Load env variables
import 'dotenv/config';

import { CISI, IMDb, RT, TMDb } from './external-api';
import { Movie, r } from './models';

const action = process.argv[2] || 'help';
const args = Array.prototype.slice.call(process.argv, 3);

const done = () => {
  r.getPoolMaster().drain();
};

const prettyPrint = (obj) => console.log(JSON.stringify(obj, null, 4));

let id;

(async () => {
  switch (action) {
  case 'get':
    id = parseInt(args[0], 10);
    Movie.get(id).then((data) => {
      console.log(data);
      done();
    });
    break;

  case 'tmdb':
    const tmdb = new TMDb(parseInt(args[0], 10));

    prettyPrint(await tmdb.data());
    done();
    break;

  case 'imdb':
    const imdb = new IMDb(args[0]);

    prettyPrint(await imdb.data());
    done();
    break;

  case 'rt':
    const rt = new RT(args[0]);

    prettyPrint(await rt.data());
    done();
    break;

  case 'cisi':
    const cisi = new CISI(args.join(' '));

    prettyPrint(await cisi.availability());
    done();
    break;

  case 'update-tmdb':
    id = parseInt(args[0], 10);
    Movie.updateFromTmdb(id).then((res) => {
      console.log(res);
      done();
    });
    break;

  case 'update-imdb':
    id = parseInt(args[0], 10);
    Movie.updateFromImdb(id).then((res) => {
      console.log(res);
      done();
    });
    break;

  case 'update-rt':
    id = parseInt(args[0], 10);
    Movie.updateFromRt(id).then((res) => {
      console.log(res);
      done();
    });
    break;

  case 'update-cisi':
    id = parseInt(args[0], 10);
    const movie = await Movie.get(id);

    console.log(await movie.updateFromCisi());
    done();
    break;

  case 'build-cs':
    id = parseInt(args[0], 10);
    Movie.buildCompositeScore(id).then((res) => {
      console.log(res);
      done();
    });
    break;

  case 'help':
    console.log('Usage: ./bin/cinemeter [action]');
    done();
    break;

  default:
    console.log('Unknown action: ' + action);
    done();
  }
})();
