import 'babel-core/polyfill';
import 'dotenv/config';
import path from 'path';
import express from 'express';
import React from 'react';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import Html from './components/Html';
import { createRedux } from './utils/redux';

import falcorExpress from 'falcor-express';
import FalcorRouter from 'falcor-router';
import { ref as $ref } from 'falcor-json-graph';
import falcor from './falcor';

const server = global.server = express();

server.set('port', process.env.PORT || 5000);
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/api/content', require('./api/content'));
server.use('/api/movies', require('./api/movies'));

let message = 'Hello World';

const DataRouter = FalcorRouter.createClass([
  {
    route: 'source.value',
    get() {
      return { path: ['source', 'value'], value: message };
    },
  }, {
    route: 'items',
    get() { // passed pathSet
      return {
        path: ['items'],
        value: $ref(['source']),
      };
    },

    set(jsonGraph) {
      message = jsonGraph.items;
      return { path: ['items'], value: message };
    },
  },
]);

server.use('/model.json', falcorExpress.dataSourceRoute(() => {
  return new DataRouter();
}));

server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const model = falcor();
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
      falcor: model,
    };

    const store = createRedux({});

    let builtComponent;

    await Router.dispatch({
      path: req.path, context, store,
    }, (state, component) => {
      builtComponent = component;
    });

    data.body = await store.renderToString(ReactDOM, builtComponent);
    data.css = css.join('');
    data.initialState = JSON.stringify(store.getState());
    data.falcorCache = JSON.stringify(model.getCache() || {});

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send('<!doctype html>\n' + html);
  } catch (err) {
    next(err);
  }
});

server.listen(server.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + server.get('port'));
  if (process.send) {
    process.send('online');
  }
});
