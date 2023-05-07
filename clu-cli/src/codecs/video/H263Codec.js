import VideoCodec from 'codecs/video/VideoCodec';

export default class H263Codec extends VideoCodec {
  static codecName = 'h263';
  static ffmpegCodecName = 'h263';
}
