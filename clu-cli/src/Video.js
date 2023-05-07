import fs from 'fs';

import { formatFromInfo } from 'formats';
import { probe } from 'lib/ffmpeg';
import { streamFromInfo } from 'streams';

const parseProbeInfo = info => ({
  streams: info.streams.map(streamFromInfo),
  format: formatFromInfo(info.format),
});

export default class Video {
  constructor(filename, { postersAsVideo } = {}) {
    this.filename = filename;
    this.postersAsVideo = postersAsVideo;

    this.format = null;
    this.streams = [];
  }

  get exists() {
    try {
      return fs.lstatSync(this.filename).isFile();
    } catch (e) {
      return false;
    }
  }

  get audio() { return this.streams.filter(s => s.type === 'audio'); }
  get subtitles() { return this.streams.filter(s => s.type === 'subtitle'); }
  get video() {
    return this.streams.filter(s => s.type === 'video' && (this.postersAsVideo || !s.attachedPic));
  }

  async probe() {
    if (!this.exists) throw new Error(`Probe attempted when ${this.filename} does not exist`);

    const info = parseProbeInfo(await probe(this.filename));

    this.streams = info.streams;
    this.format = info.format;
  }
}
