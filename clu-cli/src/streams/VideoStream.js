import BaseStream from 'streams/BaseStream';

export default class VideoStream extends BaseStream {
  static type = 'video';

  static diffableProps = {
    ...BaseStream.diffableProps,

    level: true,
    width: true,
    height: true,
    pixelFormat: true,
  }

  constructor(info) {
    super(info);

    const {
      level,
      width,
      height,
      pixelFormat,
      attachedPic,
    } = info;

    this.level = level;
    this.width = width;
    this.height = height;
    this.pixelFormat = pixelFormat;
    this.attachedPic = attachedPic;

    this.framerate = this.realFramerate;
  }
}
