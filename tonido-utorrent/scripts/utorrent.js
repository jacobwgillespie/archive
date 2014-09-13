var uTorrent = function($) {
  var that = {};
  
  var options = {
    token: '',
    cache: '',
    host: 'localhost',
    port: 49561,
    username: 'admin',
    password: 'admin',
  };
  
  that.setup = function(new_options) {
    $.extend(options, new_options);
  };
  
  that.list = function(fn) {
    authenticated_do(function(token) {
      $.getJSON('ajax/get_proxy.php', {
        uri: urlencode(builduri('?list=1&token=' + escape(token))),
        user: options.username,
        pass: options.password,
      }, function(data){
        if (fn)
          fn(data);
      });
    });
  };
  
  that.action = function(action, params, fn) {
    authenticated_do(function(token) {
      $.get('ajax/get_proxy.php', {
        uri: urlencode(builduri('?token=' + escape(token) + '&action=' + action + params)),
        user: options.username,
        pass: options.password,
      }, function(data){
        if (fn)
          fn(data);
      });
    });
  };
  
  
  function authenticated_do(fn) {
    if (options.token != '') {
      fn(options.token);
    } else {
      $.get('ajax/get_proxy.php', {
        uri: urlencode(builduri('token.html')),
        user: options.username,
        pass: options.password,
      }, function(data){
        options.token = $(data).text();
        fn(options.token);
      });
    }
  }
  
  function urlencode(url) {
    return (url);
  }
  
  function builduri(params) {
    return 'http://' + options.host + ':' + options.port + '/gui/' + params;
  }
  
  return that;
}(jQuery);