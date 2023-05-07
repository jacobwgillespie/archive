import MpegCodec from 'codecs/video/MpegCodec';

export default class Mpeg2Codec extends MpegCodec {
  static codecName = 'mpeg2';
  static ffmpegCodecName = 'mpeg2video';
}
