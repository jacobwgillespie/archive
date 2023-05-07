// Base format class. Supported formats are: ogg, avi, mkv, webm, flv, mov, mp4, mpeg
export default class BaseFormat {
  static formatName = null;
  static ffmpegFormatName = null;
  static diffableProps = {
    name: true,
  };

  constructor(info) {
    const {
      description,
      duration,
      size,
      bitrate,
      tags,
    } = info;

    this.description = description;
    this.duration = duration;
    this.size = size;
    this.bitrate = bitrate;
    this.tags = tags;
  }

  get name() {
    return this.constructor.formatName;
  }

  get ffmpegName() {
    return this.constructor.ffmpegFormatName;
  }

  parseOptions(opts) {
    if (!opts.format || opts.format !== this.constructor.formatName) {
      throw new Error('Invalid format name');
    }
    return ['-f', this.constructor.formatName];
  }
}
