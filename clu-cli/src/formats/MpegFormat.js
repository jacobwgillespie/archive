import BaseFormat from 'formats/BaseFormat';

// MPEG(TS) container, used mainly for MPEG 1/2 video codecs.
export default class MpegFormat extends BaseFormat {
  static formatName = 'mpg'
  static ffmpegFormatName = 'mpegts'
}
