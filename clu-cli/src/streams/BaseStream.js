import { codecFromName } from 'codecs';

export const parseFrameRate = val => {
  if (val.indexOf('/') !== -1) {
    let [n, d] = val.split('/');
    n = parseFloat(n) || 0.0;
    d = parseFloat(d) || 0.0;
    if (n > 0.0 && d > 0.0) {
      return n / d;
    }
  } else if (val.indexOf('.')) {
    return parseFloat(val) || 0.0;
  }
  return null;
};

export default class BaseStream {
  static type = null;

  get isClass() {
    return true;
  }

  // These props are diffable
  static diffableProps = {
    index: true,
    codec: true,
    dispositionDefault: true,
    dispositionForced: true,
    tags: true,
  };

  constructor(info) {
    const {
      index,
      codec,
      codecDescription,
      duration,
      realFramerate,
      averageFramerate,
      dispositionDefault,
      dispositionForced,
      tags,
    } = info;

    this.index = index;
    this.codec = codecFromName(codec);
    this.codecDescription = codecDescription;
    this.duration = duration;
    this.realFramerate = parseFrameRate(realFramerate);
    this.averageFramerate = parseFrameRate(averageFramerate);
    this.dispositionDefault = dispositionDefault;
    this.dispositionForced = dispositionForced;
    this.tags = tags;
  }

  get type() {
    return this.constructor.type;
  }
}
