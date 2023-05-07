import AudioCodec from 'codecs/audio/AudioCodec';

export default class AacCodec extends AudioCodec {
  static codecName = 'aac';
  static ffmpegCodecName = 'aac';

  _codecSpecificFfmpegOptions() {
    return ['-strict', 'experimental'];
  }
}
