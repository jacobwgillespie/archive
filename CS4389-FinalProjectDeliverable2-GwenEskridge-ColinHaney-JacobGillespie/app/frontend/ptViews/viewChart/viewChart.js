'use strict';

angular.module('myApp.ptViewRecords', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/visit', {
    templateUrl: 'ptViews/viewChart/viewChart.html',
    controller: 'PtViewRecordsCtrl'
  });
}])

.controller('PtViewRecordsCtrl', ['$scope','EMRService', '$cookieStore',function(sc,EMRService,$cookieStore) {
	sc.globals = $cookieStore.get('globals');
	sc.patient = EMRService.GetPatient(sc.globals.username);
	sc.visits = EMRService.GetPatientVisitsByID(sc.patient.id);

}]);