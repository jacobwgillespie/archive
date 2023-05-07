import BaseFormat from 'formats/BaseFormat';

// Matroska format, often used with H.264 video.
export default class MkvFormat extends BaseFormat {
  static formatName = 'mkv'
  static ffmpegFormatName = 'matroska'
}
