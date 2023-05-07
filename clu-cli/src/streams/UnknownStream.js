import BaseStream from 'streams/BaseStream';

export default class UnknownStream extends BaseStream {
  static type = 'unknown';
}
