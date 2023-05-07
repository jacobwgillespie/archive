import AudioCodec from 'codecs/audio/AudioCodec';

export default class Ac3Codec extends AudioCodec {
  static codecName = 'ac3';
  static ffmpegCodecName = 'ac3';

  parseOptions(opts, stream = 0) {
    const safe = { ...opts };
    if (safe.channels && safe.channels > 6) safe.channels = 6;
    return super.parseOptions(safe, stream);
  }
}
