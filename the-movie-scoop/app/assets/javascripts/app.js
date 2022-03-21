// Define app and dependencies
var app = angular.module('app', ['ngResource', 'restangular']);

// Define flashInterceptor factory for intercepting flash data in requests
app.factory('flashInterceptor', [function() {
  var flashInterceptor = {
    response: function(response) {
      var flash = response.headers('X-FLASH');
      if (flash) {
        flash = JSON.parse(flash);
        if (flash.notice) {
          toastr.success(flash.notice);
        }
        if (flash.warning) {
          toastr.warning(flash.warning);
        }
        if (flash.error) {
          toastr.error(flash.error);
        }
      }
      return response;
    }
  };

  return flashInterceptor;
}]);

// Configure app
app.config(['$httpProvider', 'RestangularProvider', function($httpProvider, RestangularProvider) {
  // Send CSRF token with all HTTP requests
  authToken = $("meta[name=\"csrf-token\"]").attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
  $httpProvider.interceptors.push('flashInterceptor');

  // Set base URL for API
  RestangularProvider.setBaseUrl('/api');

  // Add instance methods to movies
  RestangularProvider.extendModel('movies', function(model) {
    model.likeMovie = function() {
      return model.customPUT(null, 'like');
    };

    model.unlikeMovie = function() {
      return model.customDELETE('like');
    };

    model.seenMovie = function() {
      return model.customPUT(null, 'seen');
    };

    model.unseenMovie = function() {
      return model.customDELETE('seen');
    };

    model.watchlistMovie = function() {
      return model.customPUT(null, 'watchlist');
    };

    model.unwatchlistMovie = function() {
      return model.customDELETE('watchlist');
    };

    return model;
  });
}]);

app.controller('MovieController', ['$scope', 'Restangular', function($scope, Restangular) {
  $scope.init = function(id) {
    $scope.baseMovie = Restangular.one('movies', id)
    $scope.baseMovie.get().then(function(movie) {
      $scope.movie = movie;
    });
  };

  $scope.likeMovie = function() {
    $scope.baseMovie.likeMovie().then(function(data) { $scope.movie = data; });
  };

  $scope.unlikeMovie = function() {
    $scope.baseMovie.unlikeMovie().then(function(data) { $scope.movie = data; });
  };

  $scope.seenMovie = function() {
    $scope.baseMovie.seenMovie().then(function(data) { $scope.movie = data; });
  };

  $scope.unseenMovie = function() {
    $scope.baseMovie.unseenMovie().then(function(data) { $scope.movie = data; });
  };

  $scope.watchlistMovie = function() {
    $scope.baseMovie.watchlistMovie().then(function(data) { $scope.movie = data; });
  };

  $scope.unwatchlistMovie = function() {
    $scope.baseMovie.unwatchlistMovie().then(function(data) { $scope.movie = data; });
  };

  window.s = $scope;
}]);
