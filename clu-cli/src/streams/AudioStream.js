import BaseStream from 'streams/BaseStream';

export default class AudioStream extends BaseStream {
  static type = 'audio';

  static diffableProps = {
    ...BaseStream.diffableProps,

    bitrate: true,
    channels: true,
    sampleRate: true,
  }

  constructor(info) {
    super(info);

    const {
      bitrate,
      channelLayout,
      channels,
      sampleRate,
    } = info;

    this.bitrate = bitrate;
    this.channelLayout = channelLayout;
    this.channels = channels;
    this.sampleRate = sampleRate;

    this.framerate = this.averageFramerate;
  }
}
