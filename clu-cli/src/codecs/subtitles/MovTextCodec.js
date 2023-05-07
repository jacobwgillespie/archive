import SubtitleCodec from 'codecs/subtitles/SubtitleCodec';

export default class MovTextCodec extends SubtitleCodec {
  static codecName = 'mov_text';
  static ffmpegCodecName = 'mov_text';
}
