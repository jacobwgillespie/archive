var tmdb = require('../lib/tmdb');
var pluggedin = require('../lib/pluggedin');
var moment = require('moment');
var _ = require('underscore');

exports.show = function(req, res) {
  tmdb.fetchTitle(req.params.imdbid, function(data){
    pluggedin.search(data, function(review) {
      data.pluggedin = review;
      data.json = JSON.stringify(data);
      data.release_date = moment(data.release_date);
      data.genre_list = _.map(data.genres, function(genre) { return genre.name; }).join(', ');
      res.render('title', data);
    });
  });
};

exports.search = function(req, res) {
  tmdb.search(req.query.q, function(data){
    data.title = "Search Results";
    console.log(data);
    res.render('search', data);
  });
};

exports.data = function(req, res) {
  tmdb.fetchTitle(req.params.imdbid, function(data){
    pluggedin.search(data, function(review) {
      res.jsonp(review);
    });
  });
};