angular.module('EMRService',[]).factory('EMRService', ['$http', function($http){
	var service = [];

	service.GetProvider = GetProvider;
	service.GetProviderPatients = GetProviderPatients;
	service.GetVisit = GetVisit;
	service.SaveVisit = SaveVisit;
	service.GetProviderVisits = GetProviderVisits;
	service.GetPatientVisitsByID = GetPatientVisitsByID;
	service.GetPatientByID = GetPatientByID;
	service.GetPhysicians = GetPhysicians;
	service.GetPatient = GetPatient;
	service.GetAuthorizedUsers = GetAuthorizedUsers;
	service.SaveDemographics = SaveDemographics;

	return service;

	function GetAuthorizedUsers(username){
		$http.get('/api/GetAuthorizedUsers/'+username).then(apiSuccess, apiError('Error getting authorized users list'));
	}

	function GetPatient(username){
		$http.get('/api/GetPatient/'+username).then(apiSuccess, apiError('Error getting patient info'));
	}

	function authorize(physicianID, patientID){
		$http.post('api/authorizeUser/', {physID: physicianID, patientID: patientID}).then(apiSuccess, apiError('Error authorizing new user'));
	}

	function GetProvider(username){
		$http.get('/api/GetProvider/' + username).then(apiSuccess, apiError('Error getting physician info'));
		
	}

	function GetProviderPatients(username){
		$http.get('/api/GetProviderPatients/'+username).then(apiSuccess, apiError('Error getting patient list'));
		
	}

	function GetVisit(patientID, examDate){
		$http.get('api/GetVisit/'+patientID+'/'+examDate).then(apiSuccess, apiError('Error in getting visitDetails'));
	}

	function SaveVisit(visitDetails){
		$http.post('/api/SaveVisit', visitDetails).then(apiSuccess, apiError('Error saving visit'));
		
	}

	function GetProviderVisits(username){
		$http.get('api/GetProviderVisit/'+username).then(apiSuccess, apiError('Error in getting list of visits'));
	}

	function GetPatientVisitsByID(id){
		$http.get('api/GetPatientVisits/'+id).then(apiSuccess, apiError('Error in getting visits for patient'));
	}

	function GetPatientByID(id){
		$http.get('api/GetPatientByID/'+id).then(apiSuccess, apiError('Error getting pt by id'));
	}

	function GetPhysicians(){
		$http.get('api/GetPhysicians').then(apiSuccess, apiError('Error getting physician list'));
	}

	function SaveDemogaphics(patient){
		$http.post('api/SaveDemogaphics', patient).then(apiSuccess, apiError('Error saving demogaphics'));
	}

	//privateFunctions
	function apiSuccess(res){
		return res.data;
	}

	function apiError(error){
		return function(){
			return {success: false, message: error};
		}
	}
}])