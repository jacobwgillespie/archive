import AudioCodec from 'codecs/audio/AudioCodec';

export default class FaacCodec extends AudioCodec {
  static codecName = 'libfaac';
  static ffmpegCodecName = 'libfaac';
}
