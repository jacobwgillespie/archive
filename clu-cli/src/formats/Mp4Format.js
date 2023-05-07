import BaseFormat from 'formats/BaseFormat';

// MP4 container format, the default format for H.264 video content.
export default class Mp4Format extends BaseFormat {
  static formatName = 'mp4'
  static ffmpegFormatName = 'mp4'
}
