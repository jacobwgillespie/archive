/*global Firebase, FirebaseAuthClient, angular, console */

(function() {

  "use strict";

  var app = angular.module('app');

  app.factory('User', function() {
    var self = {};
    self.loggedIn = false;
    self.auth = {};
    return self;
  });

  app.controller('UserController', ['$scope', 'User',
    function($scope, User) {

      $scope.email = '';
      $scope.password = '';

      $scope.user = User;
      $scope.state = 'loading';

      var db = new Firebase('https://maplocator.firebaseio.com/');

      var authClient = new FirebaseAuthClient(db, function(error, user) {
        if (error) {
          console.log(error);
        } else if (user) {
          $scope.safeApply(function() {
            $scope.user.auth = user;
            $scope.user.loggedIn = true;
            $scope.state = 'authorized';
          });
        } else {
          $scope.safeApply(function() {
            $scope.state = 'anonymous';
          });
        }
      });

      $scope.login = function() {
        authClient.login('password', {
          rememberMe: true,
          email: $scope.email,
          password: $scope.password
        });
      };

      $scope.logout = function() {
        authClient.logout();
        window.location.reload();
      };
    }
  ]);
}());
