import debug from 'debug';
import faststart from 'faststart';
import fs from 'fs-extra';
import path from 'path';

import {
  badSubtitleCodecs,
  subtitleCodecExtensions,
  validInputExtensions,
  validOutputExtensions,
} from './extensions';
import {
  promisifyCallback,
  promisifyStream,
} from './utils';
import Converter from './Converter';
import Language from './Language';

export const validSettingsKeys = [
  'deleteOriginal',
  'outputExtension',
  'outputDir',
  'relocateMoov',
  'outputFormat',
  'videoCodec',
  'videoBitrate',
  'videoWidth',
  'h264Level',
  'audioCodec',
  'audioBitrate',
  'iOS',
  'iOSFirst',
  'maxchannels',
  'awl',
  'swl',
  'adl',
  'sdl',
  'subtitleCodec',
  'downloadsubs',
  'processMP4',
  'copyto',
  'moveto',
  'embedsubs',
  'providers',
  'permissions',
  'pixFmt',
  'logger',
];

export default class MkvToMp4 {
  constructor(settings) {
    this.settings = settings;

    if (settings.settings) {
      this.importSettings(settings.settings);
    }

    this.options = null;
    this.deletesubs = [];
  }

  get deleteOriginal() {
    if (this.settings.deleteOriginal === undefined) this.settings.deleteOriginal = true;
    return this.settings.deleteOriginal;
  }
  get outputExtension() {
    return this.settings.outputExtension || 'mp4';
  }
  get outputDir() {
    return this.settings.outputDir;
  }
  get relocateMoov() {
    if (this.settings.relocateMoov === undefined) this.settings.relocateMoov = true;
    return this.settings.relocateMoov;
  }
  get outputFormat() {
    return this.settings.outputFormat || 'mp4';
  }
  get videoCodec() {
    return this.settings.videoCodec || ['h264', 'x264'];
  }
  get videoBitrate() {
    return this.settings.videoBitrate;
  }
  get videoWidth() {
    return this.settings.videoWidth;
  }
  get h264Level() {
    return this.settings.h264Level;
  }
  get audioCodec() {
    return this.settings.audioCodec || ['ac3'];
  }
  get audioBitrate() {
    return this.settings.audioBitrate || 256;
  }
  get iOS() {
    if (this.settings.iOS === undefined) this.settings.iOS = false;
    return this.settings.iOS;
  }
  get iOSFirst() {
    if (this.settings.iOSFirst === undefined) this.settings.iOSFirst = false;
    return this.settings.iOSFirst;
  }
  get maxchannels() {
    return this.settings.maxchannels;
  }
  get awl() {
    return this.settings.awl;
  }
  get swl() {
    return this.settings.swl;
  }
  get adl() {
    return this.settings.adl;
  }
  get sdl() {
    return this.settings.sdl;
  }
  get scodec() {
    return this.settings.subtitleCodec || ['mov_text'];
  }
  get downloadsubs() {
    if (this.settings.downloadsubs === undefined) this.settings.downloadsubs = true;
    return this.settings.downloadsubs;
  }
  get processMP4() {
    if (this.settings.processMP4 === undefined) this.settings.processMP4 = false;
    return this.settings.processMP4;
  }
  get copyto() {
    return this.settings.copyto;
  }
  get moveto() {
    return this.settings.moveto;
  }
  get embedsubs() {
    return this.settings.embedsubs;
  }
  get providers() {
    return this.settings.providers || ['addic7ed', 'podnapisi', 'thesubdb', 'opensubtitles'];
  }
  get permissions() {
    return this.settings.permissions || '777';
  }
  get pixFmt() {
    return this.settings.pixFmt;
  }
  get log() {
    return (this.settings.logger = this.settings.logger || debug('app:mkv-to-mp4'));
  }

  importSettings(settings) {
    Object.keys(settings).forEach(key => { this[key] = settings[key]; });
    this.log('Settings imported.');
  }

  // Process a file from start to finish, with checking to make sure formats are compatible
  // with selected settings
  async process({ inputfile, reportProgress = false }) {
    this.log('Process started.');

    let options = null;
    let deleteOriginal = this.deleteOriginal;
    let deleted = false;
    let outputfile = null;

    if (!this.validSource(inputfile)) return false;

    if (this.needProcessing(inputfile)) {
      options = await this.generateOptions(inputfile);
      if (reportProgress) this.log(JSON.stringify(options, null, 4));

      outputfile = (await this.convert({ inputfile, options, reportProgress })).outputfile;

      if (!outputfile) {
        this.log('Error converting, no output file present.');
        return false;
      }

      this.log(`${outputfile} created from ${inputfile} successfully`);
    } else {
      outputfile = inputfile;

      if (this.outputDir) {
        outputfile = path.resolve(this.outputDir, path.basename(inputfile));
        this.log(`Output file set to ${outputfile}.`);
        fs.copySync(inputfile, outputfile);
      } else {
        deleteOriginal = false;
      }
    }

    if (deleteOriginal) {
      this.log(`Attempt to remove ${inputfile}.`);
      try {
        fs.removeSync(inputfile);
        this.log(`${inputfile} deleted.`);
        deleted = true;
      } catch (e) {
        this.log(`Couldn't delete ${inputfile}`);
      }
    }

    if (this.downloadsubs) {
      this.deletesubs.forEach(subfile => {
        this.log(`Attempting to remove subtitle ${subfile}`);

        try {
          fs.removeSync(subfile);
          this.log(`Subtitle ${subfile} deleted.`);
        } catch (e) {
          this.log(`Unable to delete subtitle ${subfile}`);
        }
      });
    }

    const dim = await this.getDimensions(outputfile);

    return {
      input: inputfile,
      output: outputfile,
      options,
      inputDeleted: deleted,
      x: dim.x,
      y: dim.y,
    };
  }

  // Determine if a source video file is in a valid format
  validSource(inputfile) {
    const { inputExtension } = this.parseFile(inputfile);

    // Make sure the inputExtension is some sort of recognized extension, and that the file exists
    if (
      validInputExtensions.includes(inputExtension) ||
      validOutputExtensions.includes(inputExtension)
    ) {
      if (fs.lstatSync(inputfile).isFile()) {
        this.log(`${inputfile} is valid.`);
        return true;
      }

      this.log(`${inputfile} not found.`);
      return false;
    }

    this.log(`${inputfile} is invalid with extension ${inputExtension}.`);
    return false;
  }

  // Determine if a file meets the criteria for processing
  needProcessing(inputfile) {
    const { inputExtension } = this.parseFile(inputfile);

    // Make sure input and output extensions are compatible. If processMP4 is true, then make sure
    // the input extension is a valid output extension and allow to proceed as well
    if (validInputExtensions.includes(inputExtension) ||
        (this.processMP4 && validOutputExtensions.includes(inputExtension)) &&
        validOutputExtensions.includes(this.outputExtension)) {
      this.log(`${inputfile} needs processing.`);
      return true;
    }

    this.log(`${inputfile} does not need processing.`);
    return false;
  }

  // Get values for width and height to be passed to the tagging classes for proper HD tags
  async getDimensions(inputfile) {
    if (!this.validSource(inputfile)) return false;

    const info = await new Converter().probe(inputfile);

    this.log(`Height: ${info.video.videoHeight}`);
    this.log(`Width: ${info.video.videoWidth}`);

    return {
      x: info.video.videoHeight,
      y: info.video.videoWidth,
    };
  }

  // Estimate the video bitrate
  estimateVideoBitrate(info) {
    const totalBitrate = info.format.bitrate;
    let audioBitrate = 0;

    info.audio.forEach(a => { audioBitrate += a.bitrate; });

    this.log(`Total bitrate is ${info.format.bitrate}`);
    this.log(`Total audio bitrate is ${audioBitrate}`);
    this.log(`Estimated video bitrate is ${totalBitrate - audioBitrate}`);

    return ((totalBitrate - audioBitrate) / 1000) * 0.95;
  }

  // Generate a list of options to be passed to ffmpeg based on selected settings
  // and the source file parameters and streams
  async generateOptions(inputfile) {
    // Get path information from the input file
    const { inputDir, filename } = this.parseFile(inputfile);

    const info = await new Converter().probe(inputfile);

    // Video stream
    this.log('Reading video stream.');
    this.log(`Video codec detected: ${info.video.codec}`);

    const vbr = this.estimateVideoBitrate(info);

    let vcodec = this.videoCodec.includes(info.video.codec.toLowerCase())
      ? 'copy'
      : this.videoCodec[0];

    let vbitrate = this.videoBitrate || vbr;

    this.log(`Pix Fmt: ${info.video.pixFmt}.`);
    if (this.pixFmt && this.pixFmt.toLowerCase() !== info.video.pixFmt.toLowerCase()) {
      vcodec = this.videoCodec[0];
    }

    if (this.videoBitrate && vbr > this.videoBitrate) {
      this.log('Overriding video bitrate. Codec cannot be copied because video bitrate is too high.'); // eslint-disable-line max-len
      vcodec = this.videoCodec[0];
      vbitrate = this.videoBitrate;
    }

    let vwidth = null;
    if (this.videoWidth && this.videoWidth < info.video.videoWidth) {
      this.log('Video width is over the max, it will be downsampled.  Video stream can no longer be copied.'); // eslint-disable-line max-len
      vcodec = this.videoCodec[0];
      vwidth = this.videoWidth;
    }

    if (this.h264Level && info.video.videoLevel && (info.video.videoLevel / 10 > this.h264Level)) {
      this.log(`Video level ${info.video.videoLevel / 10.0}. Video stream can no longer be copied.`); // eslint-disable-line max-len
      vcodec = this.videoCodec;
    }

    this.log(`Video codec: ${vcodec}`);
    this.log(`Video bitrate: ${vbitrate}`);

    // Audio streams
    this.log('Reading audio streams.');
    const audioSettings = {};
    let l = 0;
    info.audio.forEach(a => {
      if (!a.metadata.language && a.metadata.language.trim() === '') {
        a.metadata.language = 'und'; // eslint-disable-line no-param-reassign
      }

      this.log(`Audio detected for stream #${a.index}: ${a.codec} [${a.metadata.language}]`);

      // Set undefined language to default language if specified
      if (this.awl || a.metadata.language.toLowerCase() === 'und') {
        this.log(`Undefined language detected, defaulting to [${this.adl}]`);
        a.metadata.language = this.adl; // eslint-disable-line no-param-reassign
      }

      // Return if whitelist is set and the language is not in the whitelist
      if (this.awl && !this.awl.includes(a.metadata.language.toLowerCase())) return;

      // Create iOS friend audio stream if the default audio stream has too many channels
      // (iOS only like AAC stereo)
      if (this.iOS && a.audioChannels > 2) {
        const iOSBitrate = (this.audioBitrate * 2) > 256 ? 256 : (this.audioBitrate * 2);
        this.log(`Creating audio stream ${l} from source audio stream ${a.index} [iOS-audio].`);
        this.log(`Audio codec: ${this.iOS}`);
        this.log('Channels: 2.');
        this.log(`Bitrate: ${iOSBitrate}`);
        this.log(`Language: ${a.metadata.language}`);
        audioSettings[l] = {
          map: a.index,
          codec: this.iOS,
          channels: 2,
          bitrate: iOSBitrate,
          language: a.metadata.language,
        };
        l += 1;
      }

      let acodec;
      let abitrate;
      let audioChannels;

      // If the iOS audio option is enabled and the source audio channel is only stereo, the
      // additional iOS channel will be skipped and a single AAC 2.0 channel will be made
      // regardless of codec preference to avoid multiple stereo channels
      if (this.iOS && a.audioChannels <= 2) {
        this.log('Overriding default channel settings because iOS audio is enabled but the source is stereo [iOS-audio].'); // eslint-disable-line max-len
        acodec = a.codec === this.iOS ? 'copy' : this.iOS;
        audioChannels = a.audioChannels;
        abitrate = (a.audioChannels * this.audioBitrate) > (a.audioChannels * 128)
          ? a.audioChannels * 128
          : a.audioChannels * this.audioBitrate;
      } else {
        // If desired codec is the same as the source codec, copy to avoid quality loss
        acodec = this.audioCodec.includes(a.codec.toLowerCase()) ? 'copy' : this.audioCodec[0];

        // Audio channel adjustments
        if (this.maxchannels && a.audioChannels > this.maxchannels) {
          audioChannels = this.maxchannels;
          if (acodec === 'copy') acodec = this.audioCodec[0];
          abitrate = this.maxchannels * this.audioBitrate;
        } else {
          audioChannels = a.audioChannels;
          abitrate = a.audioChannels * this.audioBitrate;
        }

        // Bitrate calculations / overrides
        if (this.audioBitrate === 0) {
          this.log('Attempting to set bitrate based on source stream bitrate.');
        }

        try {
          abitrate = a.bitrate / 1000;
        } catch (e) {
          this.log(`Unable to determine audio bitrate from source stream ${a.index}, defaulting to 256 per channel.`); // eslint-disable-line max-len
          abitrate = a.audioChannel * 256;
        }

        this.log(`Audio codec: ${acodec}`);
        this.log(`Channels: ${audioChannels}`);
        this.log(`Bitrate: ${abitrate}`);
        this.log(`Language: ${a.metadata.language}`);

        // If the iOSFirst option is enabled, disable the iOS option after the first
        // audio stream is processed
        if (this.iOS && this.iOSFirst) {
          this.log('Not creating any additional iOS audio streams.');
          this.iOS = false;
        }

        audioSettings[l] = {
          map: a.index,
          codec: acodec,
          channels: audioChannels,
          bitrate: abitrate,
          language: a.metadata.language,
        };

        if (acodec === 'copy' && a.codec === 'aac') {
          audioSettings[l].bsf = 'aac_adtstoasc';
        }

        l += 1;
      }
    });

    // Subtitle stream
    const subtitleSettings = {};
    l = 0;
    this.log('Reading subtitle streams.');
    await Promise.all(info.subtitle.map(async s => {
      if (!s.metadata.language && s.metadata.language.trim() === '') {
        s.metadata.language = 'und'; // eslint-disable-line no-param-reassign
      }

      this.log(`Subtitle detected for stream #${s.index}: ${s.codec} [${s.metadata.language}]`);

      // Set undefined language to default language if specified
      if (this.sdl || s.metadata.language.toLowerCase() === 'und') {
        this.log(`Undefined language detected, defaulting to [${this.sdl}]`);
        s.metadata.language = this.sdl; // eslint-disable-line no-param-reassign
      }

      // Make sure it's not an image based codec
      if (badSubtitleCodecs.includes(s.codec.toLowerCase())) return null;

      if (this.embedsubs) {
        // Return if whitelist is set and the language is not in the whitelist
        if (this.swl && !this.swl.includes(s.metadata.language.toLowerCase())) return null;

        subtitleSettings[l] = {
          map: s.index,
          codec: this.scodec,
          language: s.metadata.language,
          encoding: 'UTF-8',
          // 'forced': s.subForced,
          // 'default': s.subDefault,
        };

        this.log(`Creating subtitle stream ${l} from source stream ${s.index}`);

        l += 1;
      } else {
        if (this.swl && !this.swl.includes(s.metadata.language.toLowerCase())) return null;

        const options = {
          format: this.scodec,
          subtitle: {
            0: {
              map: s.index,
              codec: this.scodec,
              language: s.metadata.language,
            },
          },
        };

        let extension = subtitleCodecExtensions[this.scodec];
        if (!extension) {
          this.log('Was not able to determine subtitle file extension, defaulting to \'.srt\'.');
          extension = 'srt';
        }

        const forced = s.subForced ? '.forced' : '';

        const outputDir = this.outputDir ? this.outputDir : inputDir;
        let outputfile = path.resolve(
          outputDir, `${filename}.${s.metadata.language}${forced}.${extension}`
        );

        let i = 2;

        try {
          while (fs.lstatSync(outputfile).isFile()) {
            this.log(`${outputfile} exists, appending ${i} to filename.`);
            outputfile = path.resolve(
              outputDir, `${filename}.${s.metadata.language}${forced}.${i}.${extension}`
            );
            i += 1;
          }
        } catch (e) {
          // The file doesn't exist, continue
        }

        try {
          this.log(`Ripping ${s.metadata.language} subtitle from source stream ${s.index} into external file.`); // eslint-disable-line max-len
          await new Converter().convert({
            infile: inputfile,
            outfile: outputfile,
            options,
          });
          this.log(`${outputfile} created.`);
        } catch (e) {
          this.log(`Unable to create external subtitle file for stream ${s.index}: ${e.stack}`);
        }
      }

      return null;
    }));

    // Attempt to download subtitles if they are missing using subliminal
    let downloadsubs = this.downloadsubs;
    const languages = new Set();

    if (this.swl) {
      this.swl.forEach(alpha3 => languages.add(new Language(alpha3)));
    } else if (this.sdl) {
      languages.add(new Language(this.sdl));
    } else {
      downloadsubs = false;
      this.log('No valid subtitle language specified, cannot download subtitles.');
    }

    if (downloadsubs) {
      // TODO: run subliminal
    }

    // External subtitle import
    if (this.embedsubs) {
      // Handle external subtitle import
    }

    const options = {
      format: this.outputFormat,
      video: {
        codec: vcodec,
        map: info.video.index,
        bitrate: vbitrate,
        level: this.h264Level,
      },
      audio: audioSettings,
      subtitle: subtitleSettings,
      preopts: ['-fix_sub_duration'],
      postopts: ['-threads', 'auto'],
    };

    // If using h264qsv add the codec in front of the input for decoding
    if (vcodec === 'h264qsv' && info.video.codec.toLowerCase() === 'h264') {
      options.preopts.push('-vcodec', 'h246_qsv');
    }

    // Add width option
    if (vwidth) options.video.width = vwidth;

    // Add pixFmt
    if (this.pixFmt) options.video.pixFmt = this.pixFmt;

    this.options = options;
    return options;
  }

  // Encode a new file based on selected options, built-in naming conflict resolution
  async convert({ inputfile, options, reportProgress = false }) {
    this.log('Starting conversion.');

    const { inputDir, filename, inputExtension } = this.parseFile(inputfile);
    const outputDir = this.outputDir || inputDir;
    let outputfile = path.resolve(outputDir, `${filename}.${this.outputExtension}`);

    this.log(`Input directory: ${inputDir}`);
    this.log(`File name: ${filename}`);
    this.log(`Input extension: ${inputExtension}`);
    this.log(`Output directory: ${outputDir}`);
    this.log(`Output file: ${outputfile}`);

    if (path.resolve(inputfile) === path.resolve(outputfile)) {
      this.log('Input and output file are the same.');
      try {
        fs.rename(inputfile, `${inputfile}.original`);
        inputfile = `${inputfile}.original`; // eslint-disable-line no-param-reassign
        this.log(`Renaming original file to ${inputfile}`);
      } catch (e) {
        let i = 2;
        while (fs.lstatSync(outputfile).isFile()) {
          outputfile = path.resolve(outputDir, `${filename}(${i}).${this.outputExtension}`);
          i += 1;
        }
        this.log(`Unable to rename input file. Setting output file name to ${outputfile}`);
      }
    }

    try {
      await new Converter().convert({
        infile: inputfile,
        outfile: outputfile,
        options,
        preopts: ['-fix_sub_duration'],
        postopts: ['-threads', 'auto'],
        reportProgress,
      });
    } catch (e) {
      this.log(`Error converting file, ffmpeg error: ${e.stack}`);
      if (fs.lstatSync(outputfile).isFile()) {
        fs.removeSync(outputfile);
        this.log(`${outputfile} deleted.`);
      }

      return {
        inputfile,
        outputfile: null,
      };
    }

    this.log(`${outputfile} created.`);

    try {
      fs.chmodSync(outputfile, this.permissions);
    } catch (e) {
      this.log('Unable to set new file permissions.');
    }

    return {
      inputfile,
      outputfile,
    };
  }

  // Break apart a file path into the directory, filename, and extension;
  parseFile(filepath) {
    const inputDir = path.dirname(filepath);
    const extension = path.extname(filepath);
    const filename = path.basename(filepath, extension);
    return {
      inputDir,
      filename,
      inputExtension: extension.replace(/^\./, ''),
    };
  }

  // Process a file with QTFastStart, removing the original file
  async processFastStart(inputfile) {
    const { inputExtension } = this.parseFile(inputfile);

    // Relocate MOOV atom to the very beginning.  Can double the time it takes to convert a file
    // but makes streaming faster
    if (
      !this.relocateMoov ||
      !validOutputExtensions.includes(inputExtension) ||
      !fs.lstatSync(inputfile).isFile()
    ) return inputfile;

    this.log('Relocating MOOV atom to start of file.');
    const tmpFile = `${inputfile}.QTFS`;

    // Remove temp file if it exists
    try {
      if (fs.lstatSync(tmpFile).isFile()) {
        try {
          fs.removeSync(tmpFile);
        } catch (e) {
          this.log(`Unable to delete temporary file ${tmpFile}`);
          return inputfile;
        }
      }
    } catch (e) {
      // Do nothing - the file doesn't exist
    }

    try {
      const tmpFileStream = fs.createWriteStream(tmpFile);
      const inputStream = faststart.createReadStream(inputfile).pipe(tmpFileStream);
      const promise = promisifyStream(inputStream);
      await promise;

      try {
        fs.chmodSync(tmpFile, this.permissions);
      } catch (e) {
        this.log('Unable to set file permissions.');
      }

      this.log(tmpFile, inputfile);

      await promisifyCallback(cb => fs.move(tmpFile, inputfile, { clobber: true }, cb));

      this.log('Successfully relocated MOOV to start of file');

      return inputfile;
    } catch (e) {
      this.log(`QT FastStart was unable to run: ${e}`);
      return inputfile;
    }
  }

  // Make additional copies of the input file in each directory specified in the copyto option
  replicate(inputfile, relativePath = null) {
    const files = [inputfile];

    if (this.copyto) {
      this.log('Copyto option is enabled.');

      this.copyto.forEach(d => {
        const dest = relativePath ? path.join(d, relativePath) : d;

        if (!fs.lstatSync(dest).isDirectory()) {
          fs.mkdirsSync(dest);
        }

        try {
          fs.copySync(inputfile, dest);
          this.log(`${inputfile} copied to ${dest}.`);
          files.push(path.join(dest, path.basename(inputfile)));
        } catch (e) {
          this.log(`Unable to make an additional copy of the file in ${dest}.`);
        }
      });
    }

    if (this.moveto) {
      this.log('Moveto option enabled');
      const dest = relativePath ? path.join(this.moveto, relativePath) : this.moveto;

      if (!fs.lstatSync(dest).isDirectory()) {
        fs.mkdirsSync(dest);
      }

      try {
        fs.moveSync(inputfile, dest);
        this.log(`${inputfile} moved to ${dest}.`);
        files[0] = path.join(dest, path.basename(inputfile));
      } catch (e) {
        this.debug(`Unable to move ${inputfile} to ${dest}.`);
      }
    }

    files.forEach(filename => this.log(`Final output file: ${filename}.`));
    return files;
  }
}
