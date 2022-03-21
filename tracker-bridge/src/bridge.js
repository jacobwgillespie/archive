import express from 'express';
import morgan from 'morgan';
import RSS from 'rss';
import winston from 'winston';

import jpopsuki from './jpopsuki';

process.on('unhandledRejection', (reason) => {
  winston.error(reason);
});

const linksToFeed = (title, links) => {
  const feed = new RSS({
    title,
  });

  links.forEach((link) => {
    feed.item(link);
  });

  return feed.xml();
};

const freeleech = {
  jpopsuki: [],
};

const refreshFreeleech = async () => {
  winston.info('[FREE] Beginning to refresh freeleech');
  winston.info('[FREE] Fetching jpopsuki started');
  freeleech.jpopsuki = await jpopsuki();
  winston.info('[FREE] Fetching jpopsuki complete');
  winston.info('[FREE] Refreshing freeleech complete');
};

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});


app.get('/freeleech/jpopsuki', async (req, res) => {
  res.send(linksToFeed('jpopsuki', freeleech.jpopsuki));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const { address, port } = server.address();
  console.log(`Server listening at ${address}:${port}`); // eslint-disable-line no-console
});

setInterval(refreshFreeleech, 5 * 60 * 1000);
refreshFreeleech();
