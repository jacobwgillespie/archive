var Storage_LocalStorage = function(window) {
	
	var my = {};
	
	my.get = function(key) {
		return window.localStorage[key];
	};
	
	my.set = function(key, value) {
		window.localStorage[key] = value;
	}
	
	return my;
	
}(window);