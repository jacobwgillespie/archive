import BaseCodec from 'codecs/BaseCodec';

export default class AudioCopyCodec extends BaseCodec {
  static codecName = 'copy';
  static encoderOptions = {
    language: 'str',
    source: 'str',
    map: 'int',
    bsf: 'str',
  }

  parseOptions(opts, stream = 0) {
    const safe = this.safeOptions(opts);

    const optlist = [`-c:a:${stream}`, 'copy'];

    const source = safe.source ? `${safe.source}` : '0';

    if (safe.map) optlist.push('-map', `${source}:${safe.map}`);
    if (safe.bsf) optlist.push(`-bsf:a:${stream}`, `${safe.bsf}`);

    const lang = (!safe.language || safe.language.length > 3)
      ? 'und'
      : `${safe.language}`;

    optlist.push(`-metadata:s:a:${stream}`, `language=${lang}`);

    return optlist;
  }
}
