import BaseFormat from 'formats/BaseFormat';

// MP3 container, used for audio-only MP3 files.
export default class Mp3Format extends BaseFormat {
  static formatName = 'mp3'
  static ffmpegFormatName = 'mp3'
}
