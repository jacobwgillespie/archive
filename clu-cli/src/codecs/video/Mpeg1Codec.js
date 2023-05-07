import MpegCodec from 'codecs/video/MpegCodec';

export default class Mpeg1Codec extends MpegCodec {
  static codecName = 'mpeg1';
  static ffmpegCodecName = 'mpeg1video';
}
