import AudioCodec from 'codecs/audio/AudioCodec';

export default class FdkAacCodec extends AudioCodec {
  static codecName = 'libfdk_aac';
  static ffmpegCodecName = 'libfdk_aac';
}
