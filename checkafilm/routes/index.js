var tmdb = require('../lib/tmdb');

exports.index = function(req, res){
  tmdb.nowPlaying(function(nowPlaying) {
    tmdb.upcoming(function(upcoming) {
      res.render('index', {title: 'Check a Film', nowPlaying: nowPlaying, upcoming: upcoming, json: JSON.stringify(upcoming)});
    });
  });
};