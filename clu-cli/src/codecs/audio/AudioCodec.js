import BaseCodec from '../BaseCodec';

// Base audio codec class handles general audio options. Possible parameters are:
// * codec (string) - audio codec name
// * channels (integer) - number of audio channels
// * bitrate (integer)  - stream bitrate
// * samplerate (integer) - sample rate (frequency)
// * language (string)    - language of audio stream (3 character code)
// * map (int)            - stream index
//
// Supported audio codecs are: null (no audio), copy, vorbis, aac, mp3, mp2
export default class AudioCodec extends BaseCodec {
  static encoderOptions = {
    codec: 'str',
    language: 'str',
    channels: 'int',
    bitrate: 'int',
    samplerate: 'int',
    source: 'int',
    path: 'str',
    filter: 'str',
    map: 'int',
  }

  parseOptions(opts, streamNumber = 0) {
    super.parseOptions(opts);
    let safe = this.safeOptions(opts);
    const stream = String(streamNumber);

    if (safe.channels && (safe.channels < 1 || safe.channels > 12)) {
      delete safe.channels;
    }

    if (safe.bitrate) {
      if (safe.bitrate < 8) {
        safe.bitrate = 8;
      } else if (safe.bitrate > 1536) {
        safe.bitrate = 1536;
      }
    }

    if (safe.samplerate && (safe.samplerate < 1000 || safe.samplerate > 50000)) {
      delete safe.samplerate;
    }

    if (safe.language && safe.language.length > 3) {
      delete safe.language;
    }

    const source = safe.source ? String(safe.source) : '0';

    safe = this._codecSpecificParseOptions(safe);
    const optlist = [`-c:a:${stream}`, this.constructor.ffmpegCodecName];

    if (safe.path) optlist.push('-i', `${safe.path}`);
    if (safe.map) optlist.push('-map', `${source}:${safe.map}`);
    if (safe.channels) optlist.push(`-ac:a:${stream}`, `${safe.channels}`);
    if (safe.bitrate) optlist.push(`-b:a:${stream}`, `${safe.bitrate}k`);
    if (safe.samplerate) optlist.push(`-ar:a:${stream}`, `${safe.samplerate}`);
    if (safe.filter) optlist.push(`-filter:a:${stream}`, `${safe.samplerate}`);

    optlist.push(`-metadata:s:a${stream}`, `language=${safe.language || 'und'}`);
    optlist.push(...this._codecSpecificFfmpegOptions(safe));

    return optlist;
  }
}
