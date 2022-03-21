var moment = require('moment');
var Firebase = require('firebase');

var db = new Firebase('https://checkafilm.firebaseio.com');

var cache =

module.exports = function(expiration) {
  if (expiration === undefined) expiration = 60 * 60 * 24;

  return function(namespace, id, callback, fetcher) {
    var child = db.child(namespace).child(id);
    child.once('value', function(snap) {
      // cache time of one minute
      if (snap.val() && (snap.val().cache_time > (moment().unix() - expiration))) {
        callback(snap.val());
      } else {
        fetcher(function(data) {
          data.cache_time = moment().unix();
          child.set(data);
          callback(data);
        });
      }
    });
  };
};