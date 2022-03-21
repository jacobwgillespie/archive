var util = require('util');
var https = require('https');
var events = require('events');
var sys = require('sys');
var _ = require('underscore');

var moment = require('moment');

var iCloud = function(username, password) {
  var self = this;

  events.EventEmitter.call(this);

  var host = '';

  var headers = {
    //'Host' : 'fmipmobile.icloud.com',
    'Content-Type': 'application/json',
    'X-Apple-Find-Api-Ver': '2.0',
    'X-Apple-Authscheme': 'UserIdGuest',
    'X-Apple-Realm-Support': '1.2',
    'User-Agent': 'Find iPhone/1.1 MeKit (iPad: iPhone OS/4.2.1)',
    'X-Client-Name': 'iPad',
    'X-Client-Uuid': '0cf3dc501ff812adb0b202baed4f37274b210853',
    'Accept-Language': 'en-us'
  };

  var body = JSON.stringify({
    'clientContext' : {
      'appName'       : 'FindMyiPhone',
      'appVersion'    : '1.4',
      'buildVersion'  : '145',
      'deviceUDID'    : '0000000000000000000000000000000000000000',
      'inactiveTime'  : 2147483647,
      'osVersion'     : '4.2.1',
      'personID'      : 0,
      'productType'   : 'iPad1,1'
    }
  });

  var options = {
    hostname: 'fmipmobile.icloud.com',
    port: 443,
    path: '/fmipservice/device/' + username + '/initClient',
    method: 'POST',
    headers: headers,
    auth: username + ':' + password,
    rejectUnauthorized: false,
    agent: false
  };

  var request = https.request(options, function (res) {
    host = options.hostname = res.headers['x-apple-mme-host'];
    self.emit('setup', self);
  });
  request.write(body);
  request.end();

  self.locate = function(callback) {
    if (!host) return;
    var request = https.request(options, function (response) {
      response.setEncoding('utf8');

      if (response.statusCode == 200 ) {
        var result = '';
        response.on('data', function (chunk) {
          result = result + chunk;
        });

        response.on('end', function () {
          var jsonData = JSON.parse(result);
          if (typeof jsonData !== 'undefined' && jsonData.statusCode == '200') {
            jsonData = _.reduceRight(jsonData.content, function(memo, device) {
              memo[device.id] = device.location;
              memo[device.id].name = device.name;
              memo[device.id].timeStamp = moment(memo[device.id].timeStamp);
              return memo;
            }, {});
            callback(jsonData);
          } else {
            callback(null);
          }
        });
      } else {
        self.emit('error', new Error('HTTP Status returned non-successful: ' + response.statusCode));
      }
    });
    request.write(body);
    request.end();
  };

  return self;
};

sys.inherits(iCloud, events.EventEmitter);

module.exports = iCloud;