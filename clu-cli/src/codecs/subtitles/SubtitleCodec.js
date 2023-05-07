import BaseCodec from 'codecs/BaseCodec';

// Base subtitle codec class handles general subtitle options. Possible parameters are:
// * codec (string)    - subtitle codec name (mov_text, subrib, ssa only supported currently)
// * language (string) - language of subtitle stream (3 character code)
// * forced (int)      - force subtitles (1 for true, 0 for false)
// * default (int)     - default subtitles (1 for true, 0 for false)
//
// Supported subtitle codecs are: null (no subtitles), mov_text
export default class SubtitleCodec extends BaseCodec {
  static encoderOptions = {
    codec: 'str',
    language: 'str',
    forced: 'int',
    default: 'int',
    map: 'int',
    source: 'int',
    path: 'str',
    encoding: 'str',
  }

  parseOptions(opts, streamNumber = 0) {
    super.parseOptions(opts);
    const stream = String(streamNumber);
    const safe = this.safeOptions(opts);

    if (safe.forced && (safe.forced < 0 || safe.forced > 1)) {
      delete safe.forced;
    }

    if (safe.default && (safe.default < 0 || safe.default > 1)) {
      delete safe.default;
    }

    if (safe.language && safe.language.length > 3) {
      delete safe.language;
    }

    const source = safe.source ? String(safe.source) : '0';

    const optlist = [`-c:s:${stream}`, this.constructor.ffmpegCodecName];

    if (safe.map) optlist.push('-map', `${source}:${safe.map}`);
    if (safe.encoding) optlist.push('-sub_charenc', `${safe.encoding}`);
    if (safe.path) optlist.push('-i', `${safe.path}`);
    if (safe.default) {
      optlist.push(`-metadata:s:s:${stream}`, `disposition:default=${safe.default}`);
    }
    if (safe.forced) {
      optlist.push(`-metadata:s:s:${stream}`, `disposition:forced=${safe.forced}`);
    }

    optlist.push(`-metadata:s:s:${stream}`, `language=${safe.language || 'und'}`);

    optlist.push(...this._codecSpecificFfmpegOptions(safe));
    return optlist;
  }
}
