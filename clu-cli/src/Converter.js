import fs from 'fs';

import {
  audio as audioCodecs,
  subtitles as subtitleCodecs,
  video as videoCodecs,
} from 'codecs';
import * as formats from 'formats';
import FFMpeg from './ffmpeg';


export default class Converter {
  constructor() {
    this.ffmpeg = new FFMpeg();

    this.videoCodecs = {};
    this.audioCodecs = {};
    this.subtitleCodecs = {};
    this.formats = {};

    Object.keys(audioCodecs).forEach(idx => {
      const codec = audioCodecs[idx];
      this.audioCodecs[codec.codecName] = codec;
    });

    Object.keys(subtitleCodecs).forEach(idx => {
      const codec = subtitleCodecs[idx];
      this.subtitleCodecs[codec.codecName] = codec;
    });

    Object.keys(videoCodecs).forEach(idx => {
      const codec = videoCodecs[idx];
      this.videoCodecs[codec.codecName] = codec;
    });

    Object.keys(formats).forEach(idx => {
      const format = formats[idx];
      this.formats[format.formatName] = format;
    });
  }

  // Parse format / codec options and prepare raw ffmpeg option list.
  parseOptions(opts, twopass = false) {
    const safe = { ...opts };
    const audioOptions = [];
    const videoOptions = [];
    const subtitleOptions = [];

    if (!safe.format) throw new Error('Format not specified');

    if (!this.formats[safe.format]) {
      throw new Error(`Requested unknown format: ${safe.format}`);
    }

    const formatOptions = new this.formats[safe.format]().parseOptions(opts);

    if (!safe.audio && !safe.video && !safe.subtitle) {
      throw new Error('No audio, video, or subtitle streams requested');
    }

    if (!safe.audio) safe.audio = { 0: { codec: null } };
    if (!safe.subtitle) safe.subtitle = { 0: { codec: null } };

    Object.keys(safe.audio).forEach(source => {
      const config = safe.audio[source];

      if (config.path && !config.source) {
        throw new Error('Cannot specify audio path without FFMPEG source number');
      }

      if (config.source && !config.path) {
        throw new Error('Cannot specify alternate input source without a path');
      }

      if (!this.audioCodecs[config.codec]) {
        throw new Error(`Requested unknown audio codec: ${config.codec}`);
      }

      audioOptions.push(...(new this.audioCodecs[config.codec]().parseOptions(config, source)));
    });

    Object.keys(safe.subtitle).forEach(source => {
      const config = safe.subtitle[source];

      if (config.path && !config.source) {
        throw new Error('Cannot specify subtitle path without FFMPEG source number');
      }

      if (config.source && !config.path) {
        throw new Error('Cannot specify alternate input source without a path');
      }

      if (!this.subtitleCodecs[config.codec]) {
        throw new Error(`Requested unknown subtitle codec: ${config.codec}`);
      }

      subtitleOptions.push(
        ...(new this.subtitleCodecs[config.codec]().parseOptions(config, source))
      );
    });

    if (safe.video) {
      const config = safe.video;

      if (!this.videoCodecs[config.codec]) {
        throw new Error(`Requested unknown video codec: ${config.codec}`);
      }

      videoOptions.push(...(new this.videoCodecs[config.codec]().parseOptions(config)));
    }

    return [
      ...videoOptions,
      ...audioOptions,
      ...subtitleOptions,
      ...formatOptions,
      ...(twopass === 1 ? ['-pass', '1'] : []),
      ...(twopass === 2 ? ['-pass', '2'] : []),
    ];
  }

  // Convert media file (infile) according to specified options, and
  // save it to outfile. For two-pass encoding, specify the pass (1 or 2)
  // in the twopass parameter.
  // Options should be passed as a dictionary. The keys are:
  //     * format (mandatory, string) - container format; see
  //       formats.BaseFormat for list of supported formats
  //     * audio (optional, dict) - audio codec and options; see
  //       avcodecs.AudioCodec for list of supported options
  //     * video (optional, dict) - video codec and options; see
  //       avcodecs.VideoCodec for list of supported options
  //     * map (optional, int) - can be used to map all content of stream 0
  // Multiple audio/video streams are not supported. The output has to
  // have at least an audio or a video stream (or both).
  // Convert returns a generator that needs to be iterated to drive the
  // conversion process. The generator will periodically yield timecode
  // of currently processed part of the file (ie. at which second in the
  // content is the conversion process currently).
  // The optional timeout argument specifies how long should the operation
  // be blocked in case ffmpeg gets stuck and doesn't report back. This
  // doesn't limit the total conversion time, just the amount of time
  // Converter will wait for each update from ffmpeg. As it's usually
  // less than a second, the default of 10 is a reasonable default. To
  // disable the timeout, set it to None. You may need to do this if
  // using Converter in a threading environment, since the way the
  // timeout is handled (using signals) has special restriction when
  // using threads.
  // >>> conv = Converter().convert('test1.ogg', '/tmp/output.mkv', {
  // ...    'format': 'mkv',
  // ...    'audio': { 'codec': 'aac' },
  // ...    'video': { 'codec': 'h264' }
  // ... })
  // >>> for timecode in conv:
  // ...   pass # can be used to inform the user about the progress
  async convert({
    infile, outfile, options, twopass = false, postopts = null, preopts = false,
  }) {
    let safe = { ...options };
    if (!fs.lstatSync(infile).isFile()) throw new Error(`Source file doesn't exist: ${infile}`);

    let info;
    try {
      info = await this.ffmpeg.probe(infile);
    } catch (e) {
      throw new Error('Cannot get information about source file');
    }

    if (!info.video && !info.audio) {
      throw new Error('Source file has no audio or video streams');
    }

    if (info.format.duration < 0.01) throw new Error('Zero-length media');

    if (info.video && safe.video) {
      safe = {
        ...safe,
        video: {
          ...safe.video,
          srcWidth: info.video.videoWidth,
          srcHeight: info.video.videoHeight,
        },
      };
    }

    if (twopass) {
      const optlist1 = this.parseOptions(safe, 1);
      await this.ffmpeg.convert(infile, outfile, optlist1, preopts, postopts);
      const optlist2 = this.parseOptions(safe, 2);
      await this.ffmpeg.convert(infile, outfile, optlist2, preopts, postopts);
    } else {
      const optlist = this.parseOptions(safe, false);
      await this.ffmpeg.convert(infile, outfile, optlist, preopts, postopts);
    }
  }

  // Examine the media file. See the documentation of
  // converter.FFMpeg.probe() for details.
  // :param posters_as_video: Take poster images (mainly for audio files) as
  //     A video stream, defaults to True
  probe(fname, postersAsVideo = true) {
    return this.ffmpeg.probe(fname, postersAsVideo);
  }

  // Create a thumbnail of the media file. See the documentation of
  // converter.FFMpeg.thumbnail() for details.
  tumbnail(fname, time, outfile, size = undefined, quality = this.ffmpeg.DEFAULT_JPEG_QUALITY) {
    return this.ffmpeg.thumbnail(fname, time, outfile, size, quality);
  }

  // Create one or more thumbnail of the media file. See the documentation
  // of converter.FFMpeg.thumbnails() for details.
  thumbnails(fname, optionList) {
    return this.ffmpeg.thumbnails(fname, optionList);
  }
}
