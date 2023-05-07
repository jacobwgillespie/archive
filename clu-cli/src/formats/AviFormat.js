import BaseFormat from 'formats/BaseFormat';

// AVI container format, often used with DivX video.
export default class AviFormat extends BaseFormat {
  static formatName = 'avi'
  static ffmpegFormatName = 'avi'
}
