import BaseCodec from 'codecs/BaseCodec';

export default class VideoNullCodec extends BaseCodec {
  static codecName = null;

  parseOptions() {
    return ['-vn'];
  }
}
