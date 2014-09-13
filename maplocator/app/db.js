/*global angular, Firebase */

(function() {

  "use strict";

  var app = angular.module('app');

  app.factory('DB', ['$rootScope', 'User', '$q', 'angularFire', function($rootScope, User, $q, angularFire) {
    var self = {};

    var db = new Firebase('https://maplocator.firebaseio.com/');

    self.randomName = function() {
      return db.push().name();
    };

    self.ready = function($scope, key, paths, example) {
      var deferred = $q.defer();

      var ref = null;

      var unwatchFn = $rootScope.$watch(function() {
        return User.loggedIn;
      }, function() {
        if (User.loggedIn) {
          ref = new Firebase('https://maplocator.firebaseio.com/users/').child(User.auth.id);
          ([].concat(paths)).forEach(function(path) { ref = ref.child(path); });
          deferred.resolve(angularFire(ref, $scope, key, example));
          unwatchFn();
        }
      });

      return deferred.promise;
    };

    return self;
  }]);

}());
