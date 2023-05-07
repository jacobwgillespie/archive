import BaseFormat from 'formats/BaseFormat';

// VTT subtitle format
export default class WebVttFormat extends BaseFormat {
  static formatName = 'webvtt'
  static ffmpegFormatName = 'webvtt'
}
