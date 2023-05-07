import AudioCodec from 'codecs/audio/AudioCodec';

export default class Mp3Codec extends AudioCodec {
  static codecName = 'mp3';
  static ffmpegCodecName = 'libmp3lame';
}
