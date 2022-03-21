import express from 'express';

import fetchFonts from './fetchFonts';
import popularFonts from './popularFonts';

const app = express();

app.get('/', (req, res) => {
  if (req.query.url) {
    fetchFonts(req.query.url).then(
      fonts => res.json(fonts)
    ).catch(
      error => res.json({ error })
    );
  } else {
    res.json({
      error: 'Missing url query parameter',
    });
  }
});

app.get('/popular', (req, res) => {
  res.json(popularFonts());
});

const server = app.listen(process.env.PORT || 3000, () => {
  const { address, port } = server.address();
  console.log(`Server listening at ${address}:${port}`); // eslint-disable-line no-console

  // initialize the popular font cache
  popularFonts();
});
