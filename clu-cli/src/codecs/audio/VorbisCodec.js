import AudioCodec from 'codecs/audio/AudioCodec';

// Vorbis audio codec.
// @see http://ffmpeg.org/trac/ffmpeg/wiki/TheoraVorbisEncodingGuide
export default class VorbisCodec extends AudioCodec {
  static codecName = 'vorbis';
  static ffmpegCodecName = 'libvorbis';
  static encoderOptions = {
    ...AudioCodec.encoderOptions,
    // Audio quality. Range is 0 - 10. 3 - 6 is a good range to try (default is 3)
    quality: 'int',
  }

  _codecSpecificFfmpegOptions(safe, stream = 0) {
    return safe.quality ? [`-qscale:a:${stream}`, `${safe.quality}`] : [];
  }
}
