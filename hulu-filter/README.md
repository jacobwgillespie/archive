# HuluFilter.js

This script mutes and unmutes Hulu videos to filter out profanity.  This script is the core of [jacobwg/tmfdb.org](https://github.com/jacobwg/tmfdb.org) and [jacobwg/clean-hulu](https://github.com/jacobwg/clean-hulu).

## Compiling

To compile from Coffeescript to Javascript:

```
$ coffee -j hulu-filter.js -c src/*.coffee
```

To minify, use [shrink](https://github.com/jacobwg/shrink) or your favorite minification service:

```
$ shrink hulu-filter.js
```

# runner

The `runner` directory contains an example `app.coffee` that auto-starts the filter on page load or on script load (suitable for a bookmarklet).

To compile this version:

```
$ coffee -j runner/application.js -c src/*.coffee runner/src/*.coffee
```