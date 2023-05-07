import SubtitleCodec from 'codecs/subtitles/SubtitleCodec';

export default class WebVttCodec extends SubtitleCodec {
  static codecName = 'webvtt';
  static ffmpegCodecName = 'webvtt';
}
