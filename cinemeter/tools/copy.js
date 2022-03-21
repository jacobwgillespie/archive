import path from 'path';
import replace from 'replace';
import task from './lib/task';
import copy from './lib/copy';
import watch from './lib/watch';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
export default task('copy', async () => {
  console.log('copy');
  await Promise.all([
    copy('src/public', 'build/public'),
    copy('src/content', 'build/content'),
    copy('package.json', 'build/package.json'),
  ]);

  replace({
    regex: '"start".*',
    replacement: '"start": "node server.js"',
    paths: ['build/package.json'],
    recursive: false,
    silent: false,
  });

  if (global.WATCH) {
    const watcher = await watch('src/content/**/*.*');

    watcher.on('changed', async (file) => {
      const relPath = file.substr(path.join(__dirname, '../src/content/').length);
      await copy(`src/content/${relPath}`, `build/content/${relPath}`);
    });
  }
});
