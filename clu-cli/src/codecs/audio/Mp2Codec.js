import AudioCodec from 'codecs/audio/AudioCodec';

export default class Mp2Codec extends AudioCodec {
  static codecName = 'mp2';
  static ffmpegCodecName = 'mp2';
}
