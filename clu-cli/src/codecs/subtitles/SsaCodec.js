import SubtitleCodec from 'codecs/subtitles/SubtitleCodec';

// SSA (SubStation Alpha) subtitle
export default class SsaCodec extends SubtitleCodec {
  static codecName = 'ass';
  static ffmpegCodecName = 'ass';
}
