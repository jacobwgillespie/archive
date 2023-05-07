import SubtitleCodec from 'codecs/subtitles/SubtitleCodec';

export default class DvbSubCodec extends SubtitleCodec {
  static codecName = 'dvbsub';
  static ffmpegCodecName = 'dvbsub';
}
