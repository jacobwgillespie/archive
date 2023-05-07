import BaseFormat from 'formats/BaseFormat';

// Ogg container format, mostly used with Vorbis and Theora.
export default class OggFormat extends BaseFormat {
  static formatName = 'ogg'
  static ffmpegFormatName = 'ogg'
}
