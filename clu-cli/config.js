export default {
  // outputDirectory: null,
  // copyTo: null,
  // moveTo: null,
  // outputExtension: 'mp4',
  // outputFormat: 'mp4',
  // deleteOriginal: false,
  // relocateMoov: true,
  // videoCodec: ['h264', 'x264'],
  // videoBitrate: null,
  // videoMaxWidth: null,
  // h264MaxLevel: null,
  // iosAudio: true,
  // iosFirstTrackOnly: false,
  // maxAudioChannels: null,
  // audioCodec: ['ac3'],
  // audioLanguage: null,
  // audioDefaultLanguage: null,
  // audioChannelBitrate: null,
  // subtitleCodec: 'mov_text', // ['srt', 'ass'],
  // subtitleLanguage: null,
  // subtitleDefaultLanguage: null,

  // TODO: implement media identification
  // fullpathguess: true,

  // TODO: use ffprobe to determine compliance with desired formats
  // convertMp4: false,

  // tagfile: true,
  // tagLanguage: 'en',
  // downloadArtwork: 'Poster',
  // downloadSubs: false,
  // embedsubs: true,
  // subProviders: 'addic7ed,podnapisi,thesubdb,opensubtitles',
  // permissions: '0777',

  // TODO: add plugin hook system
  // postProcess: false,

  // pixFmt: null,

  // Services to search for subtitles
  subtitleProviders: [
    'addic7ed',
    'podnapisi',
    'thesubdb',
    'opensubtitles',
  ],

  convert: {
    container: 'mp4', // or mov (mov better for iTunes, mp4 better for mobile)
    faststart: true, // relocates moov atom to speed up streaming

    file: {
      // outputDirectory: null,
      deleteOriginal: false,
      // copyTo: null,
      // moveTo: null,
      permissions: '0777', // file permissions for output file
    },

    tags: {
      editTags: true, // tag the file with metadata
      language: 'en', // language to use to search for metadata (from TMDB / TVDB)
      artwork: 'thumbnail', // artwork to embed - allows 'poster', 'thumbnail', or false
    },

    video: {
      format: 'mp4', // or m4v (but why m4v?)
      codec: ['h264', 'x264'],
      // bitrate: 12345, // sets the maximum video bitrate in kbps.
      // maxWidth: 12345, // sets the maximum video width, preserving aspect ratio
      // h264MaxLevel: 4.0, // sets the maximum H256 video level
      // pixFmt: null, // allows changing the pixel format
    },

    audio: {
      codec: ['ac3'],
      // maxChannels: 2, // specifies the maximum number of audio channels per source
      // languages: ['eng', 'jpa'], // specify which audio languages to copy
      // defaultLanguage: 'eng', // sets the default language with the source language is unknown
      // channelBitrate: 256, // Sets the audio bitrate per channel

      stereoChannels: true, // creates AAC stereo channels from sources (intended for iOS devices)
      stereoChannelsFirstOnly: false, // only uses the first audio source for stereo channel

    },

    subtitles: {
      embedCodecs: ['mov_text'], // embed subtitles in MP4 with specified codecs
      exportCodecs: ['srt', 'ass'], // export subtitles to external files in specified codecs

      // languages: ['eng', 'jpa'], // specify which subtitle codecs to embed / export
      // defaultLanguage: 'eng', // sets the default language when the source language is unknown
      search: 'missing', // search if missing (missing), always (always), or never (false)
    },
  },
};
