'use strict';

angular.module('myApp.ptDemographics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pt/demographics', {
    templateUrl: 'ptViews/demographics/demographics.html',
    controller: 'PtDemographicsCtrl'
  });
}])

.controller('PtDemographicsCtrl', ['$scope','EMRService', '$cookieStore',function(sc,EMRService,$cookieStore){
	sc.eName = false;
	sc.eEth = false;
	sc.eGender = false;
	sc.eAge = false;
	sc.eAddr = false;
	sc.ePhone1 = false;
	sc.ePhone2 = false;

	sc.globals = $cookieStore.get('globals');
	sc.patient = EMRService.GetPatient(sc.globals.username);

	sc.visits = EMRService.GetPatientVisitsByID(sc.patient.id);

	sc.editName = function(){
		console.log("editing name");
		sc.eName = true;
	};
	sc.saveName = function(){
		sc.eName = false;
		sc.save();
	};

	sc.editEth = function(){
		sc.eEth = true;
	};
	sc.saveEth = function(){
		sc.eEth = false;
		sc.save();
	};

	sc.editGender = function(){
		sc.eGender = true;
	};
	sc.saveGender = function(){
		sc.eGender = false;
		sc.save();
	};

	sc.editAge = function(){
		sc.eAge = true;
	};
	sc.saveAge = function(){
		sc.eAge = false;
		sc.save();
	};

	sc.editAddr = function(){
		sc.eAddr = true;
	};
	sc.saveAddr = function(){
		sc.eAddr = false;
		sc.save();
	};

	sc.editPhone1 = function(){
		sc.ePhone1 = true;
	};
	sc.savePhone1 = function(){
		sc.ePhone1 = false;
		sc.save();
	};

	sc.editPhone2 = function(){
		sc.ePhone2 = true;
	};
	sc.savePhone2 = function(){
		sc.ePhone2 = false;
		sc.save();
	};

	sc.save = function(){
		EMRService.SaveDemographics(sc.patient);
	}

}]);