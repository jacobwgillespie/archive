[<img src="resources/clu.jpg" width="300" align="right" />](http://tron-legacy.deviantart.com/art/TRON-Legacy-GAME-ON-208524662)

# clu-cli

[![Travis](https://img.shields.io/travis/clu-media/clu-cli.svg)](https://travis-ci.org/clu-media/clu-cli) [![David](https://img.shields.io/david/clu-media/clu-cli.svg)](https://david-dm.org/clu-media/clu-cli) [![npm](https://img.shields.io/npm/v/clu-cli.svg)](https://www.npmjs.com/package/clu-cli) [![npm](https://img.shields.io/npm/dm/clu-cli.svg)](https://www.npmjs.com/package/clu-cli)

This tool uniformly transcodes video files into a consistent MP4 format.

### Status

This project is currently pre-alpha.  Currently working on overall class architecture.  Initial tests of conversion / media detection are successful.

I'm planning on implementing an architecture similar to the following:

- classes to model videos, formats, codecs, and streams
- a configuration file parser
- a planner that can determine the desired end state of a given video, stream, etc. based on the specified configuration and can generate a diff of what needs to change to transform the original
- an executor that takes the diff and applies it using one or more manipulators (using a tool like ffmpeg, a JS-based manipulator, etc)
- surrounding helper scripts for post-processing, interacting with a cli, etc.

### History

This project took its initial inspiration from  [sickbeard_mp4_automator](https://github.com/mdhiggins/sickbeard_mp4_automator), a Python-based project with a similar goal.  `clu` was built to port the functionality of sickbeard_mp4_automator to Node.js, rearchitect and rewrite the entire application, and implement a modular plugin system to allow expansion.

As it took its original inspiration from sickbeard_mp4_automator, here are a few potential feature requests / PRs that may be potentially interesting to this project:

* consider fixing audio gain when downsampling ([#219](https://github.com/mdhiggins/sickbeard_mp4_automator/issues/219))
* look into detecting and enabling hardware acceleration if available ([#277](https://github.com/mdhiggins/sickbeard_mp4_automator/issues/277), [#431](https://github.com/mdhiggins/sickbeard_mp4_automator/issues/431))
* add detailed stream manipulation (like ability to keep certain streams in addition to transcoded ones, specify their order, etc.)
* add ability to strip metadata, chapters, certain stream types, etc
* add pluggable filters (process files based on extension, stream type, etc.)
* add option to keep original file timestamp
* look into embedding subtitles in other languages
* potentially add Handbrake as a manipulator if the source file is an ISO

### License

See `LICENSE` file.
