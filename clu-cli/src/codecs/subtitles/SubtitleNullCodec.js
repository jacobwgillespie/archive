import BaseCodec from 'codecs/BaseCodec';

export default class SubtitleNullCodec extends BaseCodec {
  static codecName = null;

  parseOptions() {
    return ['-sn'];
  }
}
