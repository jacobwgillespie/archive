/*global angular */

(function () {
  "use strict";

  angular.module('app', ['firebase', 'angular.safeapply', 'google-maps']).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider.
        when('/', {controller: 'MapsIndexController', templateUrl: '/views/maps/index.html'}).
        when('/map/:mapId', {controller: 'MapsEditController', templateUrl: '/views/maps/edit.html'}).
        otherwise({redirectTo: '/'});
    }]);
}());
