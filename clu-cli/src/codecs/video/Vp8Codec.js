import VideoCodec from 'codecs/video/VideoCodec';

export default class Vp8Codec extends VideoCodec {
  static codecName = 'vp8';
  static ffmpegCodecName = 'libvpx';
}
