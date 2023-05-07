'use strict';

angular.module('myApp.provVisitList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prov/visits/:id', {
    templateUrl: 'provViews/patientList/visitList.html',
    controller: 'provVisitListCtrl'
  });
}])

.controller('provVisitListCtrl', ['$scope','EMRService','$cookieStore','$routeParams', function(sc,EMRService,$cookieStore,$routeParams) {
	sc.globals = $cookieStore.get('globals');
	sc.provider = EMRService.GetProvider(sc.globals.username);

	sc.patient= EMRService.GetPatientByID($routeParams.id);

	sc.visits=EMRService.GetPatientVisitsByID($routeParams.id);

}]);