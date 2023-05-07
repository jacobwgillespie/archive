import BaseCodec from 'codecs/BaseCodec';

export default class VideoCopyCodec extends BaseCodec {
  static codecName = 'copy';
  static encoderOptions = {
    map: 'int',
    source: 'str',
  }

  parseOptions(opts) {
    const safe = this.safeOptions(opts);

    const optlist = ['-vcodec', 'copy'];

    const source = safe.source ? `${safe.source}` : '0';

    if ('map' in safe) optlist.push('-map', `${source}:${safe.map}`);

    return optlist;
  }
}
