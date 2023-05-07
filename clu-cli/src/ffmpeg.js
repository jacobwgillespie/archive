import debug from 'debug';
import ExtendableError from 'es6-error';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';

import { promisifyStream } from './utils';

export class FFMpegError extends ExtendableError {}

export class FFMpegConvertError extends ExtendableError {
  constructor(message, cmd, output, details = null, pid = 0) {
    super(message);

    this.cmd = cmd;
    this.output = output;
    this.details = details;
    this.pid = pid;
  }

  toString() {
    const message = this.details || this.message;
    return `<FFMpegConvertError error="${message}", pid=${this.pid}, cmd="${this.cmd}"`;
  }
}

// Describes the media container format. The attributes are:
// * format - short format name (e.g. "ogg")
// * fullname - the full format descriptive name
// * bitrate - total bitrate (bps)
// * duration - media duration in seconds
// * filesize - file size
export class MediaFormatInfo {
  constructor(info) {
    this.format = info.format_name;
    this.fullname = info.format_long_name;
    this.bitrate = info.bit_rate;
    this.duration = info.duration;
    this.filesize = info.size;
  }
}

// const parseIntDefault = (str, defaultVal = 0) => {
//   const val = parseInt(str, 10);
//   if (!str || isNaN(val)) return defaultVal;
//   return val;
// };

const parseFloatDefault = (str, defaultVal = 0.0) => {
  const val = parseFloat(str);
  if (!str || isNaN(val)) return defaultVal;
  return val;
};

// Describes one stream inside a media file. The general attributes are:
// * index - stream index inside the container (0-based)
// * type - stream type, either 'audio' or 'video'
// * codec - codec (short) name (e.g "vorbis", "theora")
// * codecDesc - codec full (descriptive) name
// * duration - stream duration in seconds
// * map - stream index for ffmpeg mapping
// * metadata - optional metadata associated with a video or audio stream
// * bitrate - stream bitrate in bytes/second
// * attachedPic - (0, 1 or null) is stream a poster image? (e.g. in mp3)
//
// Video-specific attributes are:
// * videoWidth - width of video in pixels
// * videoHeight - height of video in pixels
// * videoFps - average frames per second
//
// Audio-specific attributes are:
// * audioChannels - the number of channels in the stream
export class MediaStreamInfo {
  constructor(info) {
    this.index = info.index;
    this.type = info.codec_type;
    this.codec = info.codec_name;
    this.codecDesc = info.codec_long_name;
    this.duration = info.duration;
    this.bitrate = parseFloatDefault(info.bit_rate, null);
    this.videoWidth = parseFloatDefault(info.width);
    this.videoHeight = parseFloatDefault(info.height);
    this.audioChannels = info.channels;
    this.audioSamplerate = info.sample_rate;
    this.attachedPic = info.disposition.attached_pic;
    this.metadata = info.tags;

    if (this.type === 'video') {
      if (info.r_frame_rate) {
        if (info.r_frame_rate.indexOf('/') !== -1) {
          let [n, d] = info.r_frame_rate.split('/');
          n = parseFloatDefault(n);
          d = parseFloatDefault(d);
          if (n > 0.0 && d > 0.0) {
            this.videoFps = n / d;
          }
        } else if (info.r_frame_rate.indexOf('.')) {
          this.videoFps = parseFloatDefault(info.r_frame_rate);
        }
      }

      this.videoLevel = info.level;
      this.pixFmt = info.pix_fmt;
    }

    if (this.type === 'audio') {
      if (info.avg_frame_rate) {
        if (info.avg_frame_rate.indexOf('/') !== -1) {
          let [n, d] = info.avg_frame_rate.split('/');
          n = parseFloatDefault(n);
          d = parseFloatDefault(d);
          if (n > 0.0 && d > 0.0) {
            this.videoFps = n / d;
          }
        } else if (info.avg_frame_rate.indexOf('.')) {
          this.videoFps = parseFloatDefault(info.avg_frame_rate);
        }
      }
    }

    if (this.type === 'subtitle') {
      this.subForced = info.disposition.forced;
      this.subDefault = info.disposition.default;
    }
  }
}

// Information about media object, as parsed by ffprobe.
// The attributes are:
// * format - a MediaFormatInfo object
// * streams - a list of MediaStreamInfo objects
export class MediaInfo {
  constructor(info, postersAsVideo = true) {
    this.format = new MediaFormatInfo(info.format);
    this.streams = info.streams.map(s => new MediaStreamInfo(s));
    this.postersAsVideo = postersAsVideo;
  }

  // First video stream or null if there are no video streams.
  get video() {
    return this.streams.find(s => s.type === 'video' && (this.postersAsVideo || !s.attachedPic));
  }

  get posters() {
    return this.streams.filter(s => s.attachedPic);
  }

  // All audio streams.
  get audio() {
    return this.streams.filter(s => s.type === 'audio');
  }

  // All subtitle streams.
  get subtitle() {
    return this.streams.filter(s => s.type === 'subtitle');
  }
}

export const DEFAULT_JPEG_QUALITY = 4;

// FFMpeg wrapper object.
export default class FFMpeg {
  constructor() {
    this.ffmpeg = ffmpeg;
  }

  probe(fname, postersAsVideo = true) {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(fname, (err, info) => {
        if (err) return reject(err);
        return resolve(new MediaInfo(info, postersAsVideo));
      });
    });
  }

  convert(infile, outfile, opts, preopts = false, postopts = false) {
    if (!fs.lstatSync(infile).isFile()) {
      throw new FFMpegError(`Input file doesn't exist: ${infile}`);
    }

    let cmd = ffmpeg(infile, { logger: debug('app:ffmpeg') });
    if (preopts) cmd = cmd.inputOptions(preopts);
    cmd = cmd.outputOptions(opts);
    if (postopts) cmd = cmd.outputOptions(postopts);
    const stream = cmd.save(outfile);
    stream.on('start', c => debug('app:ffmpeg')(c));
    return promisifyStream(stream);
  }

  thumbnail(fname, time, outfile, size = undefined, quality = DEFAULT_JPEG_QUALITY) {
    return this.thumbnails(fname, [{ time, outfile, size, quality }]);
  }

  thumbnails(fname, opts) {
    let cmd = ffmpeg(fname);
    opts.forEach(opt => {
      const safe = {
        filename: opt.outfile,
        timestamps: [opt.time],
      };
      if (opt.size) safe.size = opt.size;
      cmd = cmd.screenshot(safe);
    });
    cmd.on('start', c => debug('app:ffmpeg')(c));
    return promisifyStream(cmd);
  }
}
