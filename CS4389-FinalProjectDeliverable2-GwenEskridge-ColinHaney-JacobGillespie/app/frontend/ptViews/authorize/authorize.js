'use strict';

angular.module('myApp.ptAuth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/auth', {
    templateUrl: 'ptViews/authorize/authorize.html',
    controller: 'ptAuthCtrl'
  });
}])

.controller('ptAuthCtrl', ['$scope', 'EMRService', '$cookieStore',function(sc,EMRService,$cookieStore) {
	sc.globals = $cookieStore.get('globals');
	sc.patient = EMRService.GetPatient(sc.globals.username);

	sc.authorizedUsers = EMRService.GetAuthorizedUsers(sc.globals.username);

}]);