import AudioCodec from 'codecs/audio/AudioCodec';

export default class FlacCodec extends AudioCodec {
  static codecName = 'flac';
  static ffmpegCodecName = 'flac';
}
