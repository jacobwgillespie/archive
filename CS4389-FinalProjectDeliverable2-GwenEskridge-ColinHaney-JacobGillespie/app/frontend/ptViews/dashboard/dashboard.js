'use strict';

angular.module('myApp.ptDashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/dashboard', {
    templateUrl: 'ptViews/dashboard/dashboard.html',
    controller: 'ptDashboardCtrl'
  });
}])

.controller('ptDashboardCtrl', ['$scope','EMRService', '$cookieStore', function(sc,EMRService,$cookieStore) {
	sc.globals = $cookieStore.get('globals');
	sc.patient = EMRService.GetPatient(sc.globals.username);

	sc.visits = EMRService.GetPatientVisitsByID(sc.patient.id);
}]);