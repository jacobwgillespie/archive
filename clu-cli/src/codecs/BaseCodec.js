export class CodecError extends Error {}

// Base audio / video codec class
export default class BaseCodec {
  static encoderOptions = {};
  static codecName = null;
  static ffmpegCodecName = null;

  // Proxies to static properties
  get encoderOptions() { return this.constructor.encoderOptions; }
  get name() { return this.constructor.codecName; }
  get ffmpegName() { return this.constructor.ffmpegCodecName; }

  parseOptions(opt) {
    if (opt.codec !== this.constructor.codecName) {
      throw new CodecError('invalid codec name');
    }
  }

  _codecSpecificParseOptions(safe) {
    return safe;
  }

  _codecSpecificFfmpegOptions() {
    return [];
  }

  safeOptions(opts) {
    const safe = {};

    // Only copy options that are expected
    Object.keys(opts).forEach(key => {
      const value = opts[key];

      if (this.constructor.encoderOptions[key]) {
        switch (this.constructor.encoderOptions[key]) {
          case 'str':
            safe[key] = String(value);
            break;

          case 'int':
            safe[key] = parseInt(value, 10);
            break;

          default:
            safe[key] = value;
        }
      }
    });

    return safe;
  }
}
