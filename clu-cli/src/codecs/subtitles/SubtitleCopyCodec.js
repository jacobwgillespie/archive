import BaseCodec from 'codecs/BaseCodec';

export default class SubtitleCopyCodec extends BaseCodec {
  static codecName = 'copy';
  static encoderOptions = {
    map: 'int',
    source: 'str',
  }

  parseOptions(opts, stream = 0) {
    const safe = this.safeOptions(opts);
    const source = safe.source ? `${safe.source}` : '0';

    const optlist = [];

    if (safe.map) optlist.push('-map', `${source}:${safe.map}`);

    optlist.push(`-c:s:${stream}`, 'copy');

    return optlist;
  }
}
