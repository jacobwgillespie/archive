'use strict';

angular.module('myApp.provDashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/dashboard', {
    templateUrl: 'provViews/dashboard/dashboard.html',
    controller: 'provDashboardCtrl'
  });
}])

.controller('provDashboardCtrl', ['$scope','EMRService','$cookieStore', function(sc, EMRService,$cookieStore) {
	sc.globals = $cookieStore.get('globals');
	sc.provider = EMRService.GetProvider(sc.globals.username);

	sc.visits = EMRService.GetProviderVisits(sc.globals.username);

}]);