var global_data;

function callApi(command, func) {

	return $.ajax({
			url: 'api.php?command=' + command,
		}).success(function(data) {
			var obj = {};
			$(data).each(function(idx, el) {
				var text = $(el).html();
				console.log(text);
				if (text) {
					var parts = text.split(':');
					obj[parts[0]] = parts.slice(1).join(':').trim();
				}
			});
			console.log(obj);
			global_data = data;
			func(obj);
		});

}

function updateTimecode() {

		callApi('GetCurrentlyPlaying', function(data){
			$('#timecode').html(data['Time']);
			
			
			var seconds = parseInt(data['Time'].split(':')[2]);
			if (seconds > 50) {
			callApi('SetVolume(0)');
			} else {
				callApi('SetVolume(100)');
			}
		});
		
		window.setTimeout('updateTimecode()', 500);
}

$(function() {

	window.setTimeout('updateTimecode()', 500);


});