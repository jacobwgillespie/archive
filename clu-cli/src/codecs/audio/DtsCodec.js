import AudioCodec from 'codecs/audio/AudioCodec';

export default class DtsCodec extends AudioCodec {
  static codecName = 'dts';
  static ffmpegCodecName = 'dts';
}
