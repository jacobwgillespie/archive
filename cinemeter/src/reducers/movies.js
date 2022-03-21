import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  SAVE_MOVIE_SUCCESS,
} from '../constants/actions';

export default (state = { list: [], items: {} }, action) => {
  switch (action.type) {
  case FETCH_MOVIES_SUCCESS:
    const list = action.movies.map(item => item.id);
    const items = {};

    action.movies.forEach(movie => {
      items[movie.id] = movie;
    });

    return { list, items };

  case SAVE_MOVIE_SUCCESS:
  case FETCH_MOVIE_SUCCESS:
    return {
      items: {
        ...state.items,
        [action.movie.id]: action.movie,
      },

      list: state.list,
    };

  default:
    return state;
  }
};
