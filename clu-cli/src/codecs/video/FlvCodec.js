import VideoCodec from 'codecs/video/VideoCodec';

export default class FlvCodec extends VideoCodec {
  static codecName = 'flv';
  static ffmpegCodecName = 'flv';
}
