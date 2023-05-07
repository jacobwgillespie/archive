import BaseFormat from 'formats/BaseFormat';

// WebM is Google's variant of Matroska containing only VP8 for video and Vorbis for audio.
export default class WebmFormat extends BaseFormat {
  static formatName = 'webm'
  static ffmpegFormatName = 'webm'
}
