import BaseFormat from 'formats/BaseFormat';

// MOV container format, used mostly with H.264 video content, often for mobile platforms.
export default class MovFormat extends BaseFormat {
  static formatName = 'mov'
  static ffmpegFormatName = 'mov'
}
