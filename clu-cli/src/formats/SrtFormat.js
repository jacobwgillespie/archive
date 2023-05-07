import BaseFormat from 'formats/BaseFormat';

// SRT subtitle format
export default class SrtFormat extends BaseFormat {
  static formatName = 'srt'
  static ffmpegFormatName = 'srt'
}
