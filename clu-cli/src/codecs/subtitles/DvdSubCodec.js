import SubtitleCodec from 'codecs/subtitles/SubtitleCodec';

export default class DvdSubCodec extends SubtitleCodec {
  static codecName = 'dvdsub';
  static ffmpegCodecName = 'dvdsub';
}
