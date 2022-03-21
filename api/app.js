var iCloud = require('./lib/icloud'),
    _ = require('underscore'),
    moment = require('moment'),
    nconf = require('nconf');

nconf.argv()
     .env()
     .file({ file: 'config.json' });

var tracker = new iCloud(nconf.get('ICLOUD_USERNAME'), nconf.get('ICLOUD_PASSWORD'));

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/v1/location', function(req, res) {
  tracker.locate(function(data) {
    data = data[nconf.get('DEVICE_ID')];
    res.jsonp({
      latitude: data.latitude,
      longitude: data.longitude,
      accuracy: data.horizontalAccuracy,
      timestamp: data.timeStamp
    });
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server started on port ' + port);
