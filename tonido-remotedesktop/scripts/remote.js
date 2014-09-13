var Remote = function($) {
  var remote = {};
  
  remote.getOption = function(key, defaultval) {
    if(defaultval == undefined) {
      defaultval = null;
    }
    
    return JSON.parse($.ajax({
      url: "ajax/get_option.php",
      data: {key: key, 'default': defaultval},
      dataType: 'json',
      async: false
    }).responseText);
  };
  
  remote.setOption = function(key, value) {
    return JSON.parse($.ajax({
      url: "ajax/set_option.php",
      data: {key: key, value: value},
      dataType: 'json',
      async: false
    }).responseText);
  };
  
  remote.serviceStatus = function(keyname) {
    return JSON.parse($.ajax({
      url: "ajax/service_status.php",
      dataType: 'json',
      async: false
    }).responseText);
  };
  
  remote.portStatus = function(port) {
    return JSON.parse($.ajax({
      url: "ajax/port_status.php",
      data: {port: port},
      dataType: 'json',
      async: false
    }).responseText);
  };
  
  remote.updateService = function(action) {
    return JSON.parse($.ajax({
      url: "ajax/update_service.php",
      data: {action: action},
      dataType: 'json',
      async: false
    }).responseText);
  };
  
  remote.getPassword = function() {
    return JSON.parse($.ajax({
      url: "ajax/get_password.php",
      async: false
    }).responseText);
  };
  
  remote.getEnv = function() {
    return JSON.parse($.ajax({
      url: "ajax/get_env.php",
      async: false
    }).responseText);
  };
  
  remote.getRunning = function() {
    return JSON.parse($.ajax({
      url: "ajax/get_running.php",
      async: false
    }).responseText);
  };
  
  return remote;
}(jQuery);
