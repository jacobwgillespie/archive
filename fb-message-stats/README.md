# Facebook Message Statistics

[![Dependency Status](https://gemnasium.com/jacobwg/fb-message-stats.png)](https://gemnasium.com/jacobwg/fb-message-stats)

Scripts for downloading a Facebook message conversation into a SQLite database, performing basic linguistic analysis on the message contents, and generating an HTML representation of the message and statistics.

## setup

```bash
$ git clone https://github.com/jacobwg/fb-message-stats.git
$ cd fb-message-stats
$ bundle install
$ cp settings.yml.sample settings.yml
```

Edit `settings.yml` to reflect your Facebook access token, conversation ID, and user information.

To create / migrate the database:

```bash
$ ./migrate
```

## running

```bash
$ ./import   # to download the messages
$ ./process  # to build the HTML files
```

## viewing

The HTML files will be located in `build/public`.  To view via rack, run:

```bash
$ cd build
$ rackup
```

Then open your browser to [http://localhost:9292](http://localhost:9292).

Alternatively, point any rack-compatible server to the `build` directory (like thin, pow, etc.).

## contributing

Suggestions are welcome. Please open new issues on Github for things you'd like to be addressed.

Additionally, pull requests are welcome!

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request