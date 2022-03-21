# Clean Hulu

This will be available on the Chrome App Store soon - automatically loads a filtering script that mutes profanity in closed-captioned videos.

## Compiling

The core scripts are written in Coffeescript and may be compiled with the following commands:

```
$ coffee -j scripts/app.js -c lib/*.coffee src/app.coffee
$ coffee -j scripts/filter.js -c lib/*.coffee vender/hulu-filter/src/*.coffee vender/hulu-filter/runner/src/*.coffee src/filter.coffee
$ coffee -j scripts/background.js -c src/background.coffee
```