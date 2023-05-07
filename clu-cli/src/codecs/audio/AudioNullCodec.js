import BaseCodec from 'codecs/BaseCodec';

export default class AudioNullCodec extends BaseCodec {
  static codecName = null;

  parseOptions() {
    return ['-an'];
  }
}
