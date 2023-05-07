angular.module('filters',[]).filter('recentFilter', function() {
	return function(items) {
		var earliest = new Date();
		//console.log("Today's Date: "+earliest);

		earliest.setDate(earliest.getDate() - 90);

		//console.log("Earliest Date: "+earliest);

		var result = [];

		for (var i = items.length - 1; i >= 0; i--) {
			var date = parseDate(items[i].examDate);
			//console.log('Exam Date: ' + date);
			//console.log(date > earliest);
			if (date > earliest) {
				result.push(items[i]);
			};
		};

		return result;

	}
});

function parseDate(input) {
  var parts = input.split('/');
  //console.log("Year: "+parts[2] +" Month: " + parts[0]+ " Day: " + parts[1]);
  return new Date(parts[2], parts[0]-1, parts[1]); 
}