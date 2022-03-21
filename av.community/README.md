<img src="static/images/logo.png" align="right" width="200" />

# av.community

A community of audio and video knowledge knowledge.

[![Build Status](https://travis-ci.org/av-community/av.community.svg?branch=master)](https://travis-ci.org/av-community/av.community)
[![Dependency Status](https://gemnasium.com/badges/github.com/av-community/av.community.svg)](https://gemnasium.com/github.com/av-community/av.community)
[![GitHub license](https://img.shields.io/github/license/av-community/av.community.svg)](LICENSE)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
[![built with hugo](https://img.shields.io/badge/built%20with-hugo-blue.svg)](https://gohugo.io)

## Dependencies

To build the site locally, you will need a few dependencies:

* Go and Hugo
* Python and Pygments
* Node.js 6+ and optionally YARN

## Quickstart

1. Install the dependencies:

    ```bash
    $ yarn install
    ```

1. Start the development server:

    ```bash
    $ yarn run watch
    ```

1. Visit [http://localhost:1313](http://localhost:1313).

## Usage

All of the build scripts are managed by npm scripts.  You can run them as:

```bash
$ npm run [script]
```

Script | Description
------ | -----------
`build` | Builds the website for production.  The final site will be located in the `public` directory.
`watch` | Watch the local files for changes and rebuild.  The site can be viewed at [http://localhost:1313](http://localhost:1313).
`generate-favicon` | Generate all site icons.  Needs to be run when changing `static/images/logo.png` or the favicon configuration.

## Contributing

Contributions are welcome!  Feel free to open an issue or pull request.

## License

Licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).
