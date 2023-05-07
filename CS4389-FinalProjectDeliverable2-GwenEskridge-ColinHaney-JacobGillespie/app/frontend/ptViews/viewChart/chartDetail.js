'use strict';

angular.module('myApp.ptChartDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/visit/:id/:date', {
    templateUrl: 'ptViews/viewChart/chartDetail.html',
    controller: 'PtChartDetailCtrl'
  });
}])

.controller('PtChartDetailCtrl', ['$scope','EMRService', '$cookieStore','$routeParams',function(sc,EMRService,$cookieStore,$routeParams) {
	sc.globals = $cookieStore.get('globals');
	sc.patient = EMRService.GetPatient(sc.globals.username);

	sc.visit = EMRService.GetVisit($routeParams.id, $routeParams.date);

}]);