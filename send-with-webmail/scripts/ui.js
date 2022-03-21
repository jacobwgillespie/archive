var UI = function(app) {
	
	var my = {};
	
	my.init = function() {
		
		app.bind('change:provider', function(provider) {
			$('.provider[value=' + provider + ']').attr('checked', true);
		});
		app.bind('change:pattern', function(pattern) {
			$('#pattern').val(pattern);
		});
		
		$('input[name=provider]').each(function(el) {
			$(el).on('click', function(){
				app.setProvider(this.value);
			});
		});
		
		$('#pattern').on('keyup', function() {
			app.setCustom(this.value);
			app.setProvider('custom', false);
		});
		
		$('#options').on('submit', function() {
			if (app.getProvider() == "custom") {
				app.setPattern($('#pattern').val());
			}
			app.save();
			var el = $.create('<div class="animated fadeInDown message">Settings saved.</div>');
			$('#messages').html('').append(el);
			el.on('click', function() {
				$('#messages').html('');
			});
			return false;
		});
	};
	
	return my;
	
};