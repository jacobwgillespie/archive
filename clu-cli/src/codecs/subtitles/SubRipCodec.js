import SubtitleCodec from 'codecs/subtitles/SubtitleCodec';

export default class SubRipCodec extends SubtitleCodec {
  static codecName = 'subrip';
  static ffmpegCodecName = 'subrip';
}
