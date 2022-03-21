import { compose, createStore } from 'redux';
import applyMiddleware from 'redux-wait';
import createLogger from 'redux-logger';
import { ROUTER_STATE_CHANGE } from '../constants/actions';
import reducer from '../reducers';
import promiseMiddleware from 'redux-promise';
import { fromJS } from 'immutable';

export function createRedux(initialState) {
  const middleware = [promiseMiddleware];

  Object.keys(initialState).forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });

  if (__DEV__ && !__SERVER__) {
    middleware.push(createLogger({
      collapsed: true,
      predicate: (getState, action) => !(action.type === ROUTER_STATE_CHANGE),
    }));
  }

  let finalCreateStore;

  if (__DEV__ && !__SERVER__) {
    const { devTools, persistState } = require('redux-devtools');

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  }

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    const nextReducer = require('../reducers');

    module.hot.accept('../reducers',
      () => {
        store.replaceReducer(nextReducer);
      });
  }

  return store;
}
