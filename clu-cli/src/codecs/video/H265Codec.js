import H264Codec from 'codecs/video/H264Codec';
import VideoCodec from 'codecs/video/VideoCodec';

// H.265/AVC video codec.
// @see https://trac.ffmpeg.org/wiki/Encode/H.265
export default class H265Codec extends H264Codec {
  static codecName = 'h265';
  static ffmpegCodecName = 'libx265';
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

    // Special handlers for the even number requirements of h265
    wscale: 'int',
    hscale: 'int',
  }
}
