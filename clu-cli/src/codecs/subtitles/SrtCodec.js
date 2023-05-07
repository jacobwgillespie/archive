import SubtitleCodec from 'codecs/subtitles/SubtitleCodec';

export default class SrtCodec extends SubtitleCodec {
  static codecName = 'srt';
  static ffmpegCodecName = 'srt';
}
