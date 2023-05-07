import debug from 'debug';
import extend from 'extend';

export default class PostProcessor {
  constructor(files, logger = debug('app:post-processor')) {
    this.log = logger;
    this.log(`Output: ${files}.`);
    this.setScriptEnvironment(files);
  }

  setScriptEnvironment(files) {
    this.log('Setting script environment.');
    this.postProcessEnvironment = extend(true, {}, process.env, {
      MH_FILES: JSON.stringify(files),
    });
  }

  setTV(tvdbid, season, episode) {
    this.log('Setting TV metadata.');
    this.postProcessEnvironment = {
      ...this.postProcessEnvironment,
      MH_TVDBID: tvdbid,
      MH_SEASON: season,
      MH_EPISODE: episode,
    };
  }

  setMovie(imdbid) {
    this.log('Setting movie metadata.');
    this.postProcessEnvironment = {
      ...this.postProcessEnvironment,
      MH_IMDBID: imdbid,
    };
  }
}
