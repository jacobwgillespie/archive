import rethinkDB from 'rethinkdbdash';

// const dbName = process.env.DATABASE_NAME || 'cinemeter';

const r = rethinkDB({
  discover: true,
  silent: true,
});

export default r;
