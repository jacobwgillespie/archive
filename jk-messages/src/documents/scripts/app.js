var app = angular.module('app', []);

if (store.get('version') !== 8) {
  store.remove('messages');
  store.set('version', 8);
}

var formatDuration = function(duration) {
  var days = parseInt(duration.asDays(), 10);
  return days === 1 ? '1 day' : days + ' days';
};

// URL pattern for autolinking
var url_pattern = /(^|\s)(\b(https?|ftp):\/\/[\-A-Z0-9+\u0026@#\/%?=~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~_|])/gi;

// Facebook FQL object
app.factory('FB', ['$http',
  function($http) {
    return function(query, token, cb) {
      return $http.jsonp('https://graph.facebook.com/fql?q=' + encodeURI(query) + '&access_token=' + token + '&callback=JSON_CALLBACK').success(function(data) {
        cb(data.data[0]);
      });
    };
  }
]);

app.controller('MessagesController', ['$scope', '$timeout', 'FB',
  function($scope, $timeout, FB) {

    // Safe apply
    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    $scope.fb = FB;

    // Application State (loading, anonymous, authorizing, authorized-updating, authorized-current, unauthorized)
    $scope.state = 'loading';

    // Authentication
    $scope.auth = {};
    $scope.users = {};

    // Messages
    $scope.messages = [];
    $scope.seen = {};
    $scope.hasMessagesToday = false;

    // Data
    $scope.data = {currentMessage: 0};
    $scope.firstDate = 1344867195;
    $scope.firstMoment = moment.unix($scope.firstDate);
    $scope.currentDate = 1344867195; //moment().unix();
    $scope.durationMessages = formatDuration(moment.duration(moment() - moment('2012-08-13 9:13am CST')));
    $scope.durationRelationship = formatDuration(moment.duration(moment() - moment('2012-10-21 1pm CST')));

    $scope.cache = {
      currentMoment: {},
      currentDateStart: {},
      currentDateEnd: {},
      nextDay: {},
      prevDay: {}
    };

    var cache = function(store, key, value) {
      store[key] = store[key] || value();
      return store[key];
    };

    $scope.$watch('currentDate', function() {
      $scope.currentMoment = cache($scope.cache.currentMoment, $scope.currentDate, function() {
        return moment.unix($scope.currentDate);
      });

      $scope.nextDay = cache($scope.cache.nextDay, $scope.currentDate, function() {
        return moment($scope.currentMoment).add('days', 1).format('YYYY-MM-DD');
      });

      $scope.prevDay = cache($scope.cache.prevDay, $scope.currentDate, function() {
        return moment($scope.currentMoment).subtract('days', 1).format('YYYY-MM-DD');
      });

      $scope.startOfCurrentDay = cache($scope.cache.currentDateStart, $scope.currentDate, function() {
        return $scope.currentMoment.startOf('day').unix();
      });

      $scope.endOfCurrentDay = cache($scope.cache.currentDateEnd, $scope.currentDate, function() {
        return $scope.currentMoment.endOf('day').unix();
      });

      document.title = $scope.currentMoment.format('dddd, MMMM Do YYYY') + ' | The J&K Messages';
    });

    $scope.showSeen = function(id) {
      return !!($scope.seen[id]);
    };

    $scope.formattedSeen = function(id) {
      if ($scope.showSeen(id)) {
        return '✓ Seen by ' + _.map($scope.seen[id], function(person) { return '<span title="' + moment.unix(person.time).format("dddd, MMMM Do YYYY, h:mm:ss a") + '">' + person.name + '</span>'; }).join(', ');
      }
    };

    var db = new Firebase('https://jacob-and-kathryn.firebaseio.com/');

    var usersDB = db.child('users');
    var messagesDB = db.child('messages');
    var dataDB = db.child('data');
    var seenDB = db.child('seen');

    var loadMessages = function() {
      $scope.messages = [];
      $scope.state = 'authorized-updating';
      messagesDB.off();
      messagesDB.startAt($scope.startOfCurrentDay).endAt($scope.endOfCurrentDay).on('value', function(snap) {
        $scope.safeApply(function() {
          $scope.messages = _.filter(snap.val(), function(message) { return message !== undefined; });
          $scope.hasMessagesToday = ($scope.messages.length > 0);
          $scope.state = 'authorized-current';
        });
      });
    };

    $scope.$watch('currentDate', function() {
      if ($scope.state === 'authorized-current' || $scope.state === 'authorized-updating') {
        loadMessages();
      }
    });

    var importingSetUp = false;
    var setUpImporting = function() {
      if (importingSetUp) return;
      importingSetUp = true;

      // disabling importing
      return;

      if ($scope.auth.id !== '100000505263000') return;

      var loadMessage = function(id) {
        // Build query
        var q = 'SELECT attachment, author_id, body, created_time, message_id, source, thread_id FROM message WHERE message_id="510521608973600_' + id + '"';

        // Make query
        FB(q, $scope.auth.accessToken, function(message) {

          // Calculate data
          message.word_count = ((message.body || ' ').match(/\S+/g) || []).length;
          message.author_key = (message.author_id == '100000505263000') ? 'jacob' : 'kathryn';
          message.name = (message.author_id == '100000505263000') ? 'Jacob Gillespie' : 'Kathryn Elizabeth';
          message.header = moment.unix(message.created_time).format("dddd, MMMM Do YYYY, h:mm:ss a") + ' - ' + message.name + ':';
          message.local_id = parseInt(message.message_id.replace('510521608973600_', ''), 10);

          // Build HTML display
          message.html = message.body.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br/>');
          message.html = '<p>' + message.html + '</p>';
          message.html = message.html.replace(url_pattern, "$1<a href='$2'>$2</a>");

          // Save message with priority
          messagesDB.child(id).setWithPriority(message, message.created_time);

          // Increment the current message ID
          dataDB.child('currentMessage').transaction(function(currentMessage) {
            if (currentMessage < id)
              return id;
            else
              return currentMessage;
          });

          // Set the last message send time
          dataDB.child('lastMessageTime').transaction(function(lastMessageTime) {
            if (lastMessageTime < message.created_time)
              return message.created_time;
            else
              return lastMessageTime;
          });

          // Increment word count
          dataDB.child('wordCount').transaction(function(wordCount) {
            return wordCount + message.word_count;
          });

          console.log('Imported message ' + id);
        });
      };

      window.lm = loadMessage;

      var checkForNewMessages = function() {
        console.log('Checking for messages...');
        FB('SELECT message_count FROM thread WHERE thread_id=510521608973600', $scope.auth.accessToken, function(fb) {
          var count = fb.message_count;
          var lastMessage = count - 1;
          console.log('There are ' + count + ' messages');

          if (lastMessage > $scope.data.currentMessage) {
            for (var i = $scope.data.currentMessage + 1; i <= lastMessage; i++) {
              loadMessage(i);
            }
          } else {
            console.log('Messages already imported.');
          }
        });
      };

      checkForNewMessages();

      setInterval(checkForNewMessages, 60 * 1000);

    };

    var authSetUp = false;
    var setUpAuth = function(user) {
      if (authSetUp) return;
      authSetUp = true;

      if ($scope.users['fb-' + user.id]) {
        $scope.auth = user;
        $scope.state = 'authorized-updating';

        seenDB.on('value', function(snap) {
          $scope.safeApply(function() {
            $scope.seen = snap.val();
          });
        });

        dataDB.on('value', function(snap) {
          $scope.safeApply(function() {
            $scope.data = snap.val();
          });
          loadMessages();
          setUpImporting();
        });

        // Save authentication token
        usersDB.child('fb-' + $scope.auth.id).child('token').set($scope.auth.accessToken);
      } else {
        $scope.state = 'unauthorized';
      }
    };

    var authClient = new FirebaseSimpleLogin(db, function(error, user) {
      if (error) {
        console.log(error);
      } else if (user) {
        $scope.safeApply(function() {
          $scope.auth = user;
          $scope.state = 'authorizing';
        });

        usersDB.on('value', function(snap) {
          $scope.safeApply(function() {
            $scope.users = snap.val();
            setUpAuth(user);
          });
        });
      } else {
        $scope.safeApply(function() {
          $scope.state = 'anonymous';
        });
      }
    });

    $scope.login = function() {
      authClient.login('facebook', {
        rememberMe: true,
        scope: 'email'
      });
    };

    $scope.loginJacob = function() {
      authClient.login('facebook', {
        rememberMe: true,
        scope: 'email,read_mailbox'
      });
    };

    $scope.logout = function() {
      authClient.logout();
      window.location.reload();
    };

    $scope.$watch('state + currentDate + messages', function() {
      if ($scope.state === 'authorized-current') {
        _.each($scope.messages, function(message, id) {
          seenDB.child(message.local_id).child('fb-' + $scope.auth.id).set({
            name: $scope.auth.first_name,
            time: moment().unix()
          });
        });
      }
    });

    // Routing
    var goToDate = function(date) {
      $scope.safeApply(function() {
        $scope.currentDate = moment(date).unix();
      });
    };

    var goToLast = function() {
      $scope.safeApply(function() {
        $scope.currentDate = $scope.data.lastMessageTime || $scope.firstDate;
      });
    };

    var routes = {
      '/:date' : goToDate,
      '/' : goToLast
    };

    var router = Router(routes);
    router.init('/');

    $scope.$watch('messages', function() {
      if (router.getRoute()[0] === '') {
        goToLast();
      }
    });

    // Expose scope for debugging
    window.s = $scope;

  }
]);
