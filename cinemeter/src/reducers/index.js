import { combineReducers } from 'redux';
import router from './router';
import movies from './movies';
import entities from './entities';

export default combineReducers({
  router,
  movies,
  entities,
});
