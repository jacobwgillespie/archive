import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import fillStore from './utils/fillStore';

import { routerStateChange } from './actions/router';

import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import MoviePage from './components/MoviePage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();

    if (!component) {
      return new Error('No Component');
    }

    const { store } = state;

    await fillStore(store, state, [component]);

    const { path, params } = state;
    const routerState = Immutable.fromJS({ path, params });

    store.dispatch(routerStateChange(routerState));

    // hydrateCache(component);

    return (
      <Provider store={store}>
        <App context={state.context}>{component}</App>
      </Provider>
    );
  });

  on('/contact', async () => <ContactPage />);

  on('/movie', async () => <MoviePage />);

  on('/movies/:id', async (state) => {
    const movie = await http.get(`/api/movies/${state.params.id}`);

    return movie && <MoviePage {...movie} />;
  });

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);

    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404
    ? <App context={state.context} error={error}><NotFoundPage /></App>
    : <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
