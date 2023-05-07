/* eslint-disable no-console */
import 'babel-polyfill';
// import inquirer from 'inquirer';
import util from 'util';
import yargs from 'yargs';

// import MkvToMp4 from './MkvToMp4';
// import config from '../config';
import Executor from 'Executor';
import FileCollector from 'plugins/FileCollector';
import Video from 'Video';

const argv = yargs.argv;

const format = (time) => (
  time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
);

const run = (fn, options) => {
  const task = fn.default || fn;
  const start = new Date();

  console.log(`[${format(start)}] Starting '${task.name}'...`);

  return task(options).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(`[${format(end)}] Finished '${task.name}' after ${time} ms`);
  });
};

// const prompt = opts => new Promise((resolve) => {
//   inquirer.prompt(opts, res => resolve(res));
// });

const processFile = async inputfile => {
  const video = new Video(inputfile, { postersAsVideo: true });
  await video.probe();

  console.log('format', util.inspect(video.format, { depth: 4 }));
  console.log('audio', util.inspect(video.audio, { depth: 4 }));
  console.log('subtitles', util.inspect(video.subtitles, { depth: 4 }));
  console.log('video', util.inspect(video.video, { depth: 4 }));

  const config = {
    plugins: [
      new FileCollector(inputfile),
    ],
  };

  const executor = new Executor(config);

  await executor.collect();

  console.log(util.inspect(executor.state, { depth: 4 }));

  // const converter = new MkvToMp4(config);
  //
  // if (!converter.validSource(inputfile)) {
  //   throw new Error(`Invalid input file: ${inputfile}`);
  // }
  //
  // const process = converter.process({ inputfile, reportProgress: true });
  // const { output } = await process;
  //
  // if (output) {
  //   if (config.relocateMoov) {
  //     await converter.processFastStart(output);
  //   }
  // }
};

run(async () => {
  await processFile(argv.input);
}).catch(err => console.error(err.stack));
