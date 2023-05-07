import VideoCodec from 'codecs/video/VideoCodec';

// H.264/AVC video codec.
// @see http://ffmpeg.org/trac/ffmpeg/wiki/x264EncodingGuide
export default class H264Codec extends VideoCodec {
  static codecName = 'h264';
  static ffmpegCodecName = 'libx264';
  static encoderOptions = {
    ...VideoCodec.encoderOptions,
    // Presets: ultrafast, superfast, veryfast, faster, fast,
    // medium (default), slow, slower, veryslow
    preset: 'str',

    // Consistant rate factor, range 0 (lossless) to 51 (worst). Default 23, recommended 18 - 28.
    quality: 'int',

    // Default: not-set.  Values: http://mewiki.project357.com/wiki/X264_Settings#profile
    profile: 'str',

    // Default: not-set.  Values 3.0 to 4.2.
    level: 'float',

    // Default: not-set.  Values: http://mewiki.project357.com/wiki/X264_Settings#profile
    tune: 'str',

    // Special handlers for the even number requirements of h264
    wscale: 'int',
    hscale: 'int',
  }

  parseOptions(opts, stream = 0) {
    const safe = { ...opts };

    if (safe.width) {
      safe.wscale = safe.width;
      delete safe.width;
    }

    if (safe.height) {
      safe.hscale = safe.height;
      delete safe.height;
    }

    return super.parseOptions(safe, stream);
  }

  _codecSpecificFfmpegOptions(safe) {
    const optlist = [];

    if (safe.preset) optlist.push('-preset', safe.preset);
    if (safe.quality) optlist.push('-crf', `${safe.quality}`);
    if (safe.profile) optlist.push('-profile:v', safe.profile);
    if (safe.level && safe.level >= 3.0 && safe.level <= 4.2) {
      optlist.push('-level', `${safe.level}`);
    }
    if (safe.tune) optlist.push('-tune', safe.tune);

    if (safe.wscale && safe.hscale) {
      optlist.push('-vf', `scale=${safe.wscale}:${safe.hscale}`);
    } else if (safe.wscale) {
      optlist.push('-vf', `scale=${safe.wscale}:trunc(ow/a/2)*2`);
    } else if (safe.hscale) {
      optlist.push('-vf', `scale=trunc((oh*a)/2)*2:${safe.hscale}`);
    }

    return optlist;
  }
}
