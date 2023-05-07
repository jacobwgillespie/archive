import VideoCodec from 'codecs/video/VideoCodec';

export default class TheoraCodec extends VideoCodec {
  static codecName = 'theora';
  static ffmpegCodecName = 'libtheora';
  static encoderOptions = {
    ...VideoCodec.encoderOptions,
    // Video quality. Range is 0 - 10. 5 - 7 is a good range to try (default is 200k bitrate)
    quality: 'int',
  }

  _codecSpecificFfmpegOptions(safe) {
    return safe.quality ? ['-qscale:v', `${safe.quality}`] : [];
  }
}
