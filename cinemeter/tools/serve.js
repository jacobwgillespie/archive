import path from 'path';
import cp from 'child_process';
import task from './lib/task';
import watch from './lib/watch';

/**
 * Launches Node.js/Express web server in a separate (forked) process.
 */
export default task('serve', () => new Promise(async (resolve, reject) => {
  console.log('serve');

  const start = () => {
    const server = cp.fork(path.join(__dirname, '../build/server.js'), {
      env: Object.assign({ NODE_ENV: 'development' }, process.env),
    });

    server.once('message', message => {
      if (message.match(/^online$/)) {
        resolve();
      }
    });
    server.once('error', err => reject(err));
    process.on('exit', () => server.kill('SIGTERM'));
    return server;
  };

  let server = start();

  if (global.WATCH) {
    const watcher = await watch('build/server.js');

    watcher.on('changed', async () => {
      server.kill('SIGTERM');
      server = start();
    });
  }
}));
