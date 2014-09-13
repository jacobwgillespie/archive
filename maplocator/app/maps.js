/*global angular */

(function() {

  "use strict";

  var app = angular.module('app');

  app.controller('MapsIndexController', ['$scope', 'DB', 'User',
    function($scope, DB, User) {

      $scope.user = User;
      $scope.maps = [];

      DB.ready($scope, 'maps', 'maps', []);

      $scope.addMap = function() {
        $scope.maps.push({name: $scope.mapName, description: $scope.mapDescription, id: DB.randomName()});
        $scope.mapName = '';
        $scope.mapDescription = '';
      };

      $scope.removeMap = function(id) {
        $scope.maps.splice(id, 1);
      };

      $scope.db = DB;

      window.s = $scope;

    }
  ]);

  app.controller('MapsEditController', ['$scope', 'DB', 'User', '$routeParams',
    function($scope, DB, User, $routeParams) {
      angular.extend($scope, {
        center: {
          latitude: 37.0625,
          longitude: -95.677068
        },
        markers: [],
        zoom: 8
      });

      $scope.user = User;
      $scope.map = {};

      DB.ready($scope, 'map', ['maps', $routeParams.mapId], {});

      $scope.addPin = function() {
        $scope.map.pins.push({name: $scope.pinName, description: $scope.pinDescription, id: DB.randomName()});
        $scope.pinName = '';
        $scope.pinDescription = '';
      };

      $scope.removePin = function(id) {
        $scope.map.pins.splice(id, 1);
      };
    }
  ]);
}());
