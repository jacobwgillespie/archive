var VNC = function($) {
  
  var vnc = {};
  
  var state = new State();
  state.add('connecting');
  state.add('loaded');
  state.add('starting');
  state.add('restarting');
  state.add('started');
  state.add('stopping');
  state.add('stopped');
  state.add('error');
  
  if (window.console && console.log) {
    state.bind(function(current_state, new_state) {
      console.info('Changing states from ' + current_state + ' to ' + new_state);
    });
  }

  var ENV = {
    installed: false,
    vnc_port: 5900,
    policy_port: 1234,
    password: null
  };

  vnc.connect = function() {
    state.change('connecting');
    $.getJSON('lib/start.php', {policy_host: WEBHOST}, function() {
      $.getJSON('lib/get_env.php', function(server_env) { 
        ENV = server_env; 
        $.extend(ENV, {vnc_host: WEBHOST});
        if (ENV.success == true) {
          state.change('started');
        } else {
          state.change('error');
        }
      });
    });
  };
  
  vnc.custom_connect = function(host, port, password) {
    state.change('connecting');
    
    ENV = {
      vnc_host: host,
      vnc_port: port,
      password: password
    };
    state.change('started');
  };
  
  vnc.disconnect = function() {
    state.change('stopping');
    $.get('lib/stop.php', function() {
      state.change('stopped');
    });
  };
  
  vnc.get_state_manager = function() {
    return state;
  }
  
  vnc.get_environment = function() {
    return ENV;
  }

  function connectCustom() {
    var dialogtext, dialogbuttons;
    
    dialogtext += '<p>';
    dialogtext += 'It seems that you already have a VNC server running on your remote computer... would like to connect to that?';
    dialogtext += '</p>';
    
    dialogtext += '<p>';
    dialogtext += 'If so, please enter the port on which your VNC server is running.';
    dialogtext += '</p>';
    
    dialogtext  = '<p>';
    dialogtext += '<label for="custom_port">Server Port</label>';
    dialogtext += '<input type="text" id="custom_port" />';
    dialogtext += '</p>';
    
    dialogtext += '<p>';
    dialogtext += 'If you don\'t know what we\'re talking about, then just click <em>cancel</em>.';
    dialogtext += '</p>';
    
    dialogbuttons = {
      Connect: function() {
        var port = $('#custom_port').val();
        $(this).dialog('close');
        writeFlash(port);
        $('#topbar #connect').addClass('disabled');
        $('#topbar #disconnect').removeClass('disabled');
      },
      Cancel: function() {
        $(this).dialog('close');
      }
    };
    
    modalDialog('VNC Server Port', dialogtext, dialogbuttons);
  }
  
  return vnc;
}(jQuery);
