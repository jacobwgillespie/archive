import VideoCodec from 'codecs/video/VideoCodec';

export default class DivxCodec extends VideoCodec {
  static codecName = 'divx';
  static ffmpegCodecName = 'mpeg4';
}
