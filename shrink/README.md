# Shrink

Shrink is a simple command-line utility for shrinking JavaScript files with the Google Closure Compiler.  At the moment, shrink only supports JavaScript files, but support for CSS, HTML, and images is planned.

## Installation

```
$ gem install shrink
```

## Usage

```
$ shrink --help
Shrink shrinks (minifies) your web assets.  Shrink currently supports JavaScript
via the Google Closure Compiler.

Usage:
      shrink [options] <input file>
      shrink [options] <input file(s)> <output file>

where [options] are:
      --dry, -d:   Dry run
    --force, -f:   Force override if the output file exists
  --version, -v:   Print version and exit
     --help, -h:   Show this message
```

## License

Shrink is released under the MIT license:

* [www.opensource.org/licenses/MIT](http://www.opensource.org/licenses/MIT)