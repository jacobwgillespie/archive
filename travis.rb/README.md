# travis.rb

This is a very basic Facebook scraper that scrapes the Punch Time Explosion fan page posts and comments - this was built for the purpose of doing some basic statistical analysis on Travis Cox's, um, interesting posts.

It imports all posts into a mongodb database, so you'll need `ruby` and the Mongoid gem.  Run it as follows:

```
$ ruby travis.rb fb_api_key
```

You can get a Facebook API key at https://developers.facebook.com/tools/explorer - just click "Get Access Token" then copy-paste.

There's a basic `stats.rb` file as an example of the kind of stats that can be generated.  Future ideas for expansion would be sentiment analysis, writing level analysis, posts-per-month, etc.

Thanks for the fun, Travis!  :)