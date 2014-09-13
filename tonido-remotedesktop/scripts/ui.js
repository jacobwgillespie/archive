var VNC_UI = function($) {
  
  var ui = {};
  
  var base;
  var vnc = {};
  var ENV = {};
  
  ui.bind_to = function(id, vnc_parent) {
    vnc = vnc_parent;
    ENV = vnc.get_environment();
    
    vnc.get_state_manager().bind(display_message);
    vnc.get_state_manager().bind(flash);
    vnc.get_state_manager().bind(buttons);

    base = $('#' + id);
    
    $(window).bind('beforeunload', function() {
      vnc.disconnect();
    });
    
    $('#topbar .close').click(function(e){
      $('#topbar').slideUp('fast');
      $('#topbar-open').slideDown('fast');
    });
    
    $('#topbar-open').click(function(e){
      $(this).slideUp('fast');
      $('#topbar').slideDown('fast');
    });
    
    $('#connect').live('click', function(e){
      if (!$(this).hasClass('disabled')) {
        vnc.connect();
      }
    });
    
    $('#disconnect').live('click', function(e){
      if (!$(this).hasClass('disabled')) {
        vnc.disconnect();
      }
    });

    $("#topbar").ajaxStart(function() {
      $(this).addClass('loading');
    });
    
    $("#topbar").ajaxStop(function() {
      $(this).removeClass('loading');
    });
    
  }
  
  function buttons(current_state, new_state) {
    if (new_state == 'started') {
      $('#connect').addClass('disabled');
      $('#disconnect').removeClass('disabled');
    } else if (new_state == 'stopped') {
      $('#disconnect').addClass('disabled');
      $('#connect').removeClass('disabled');
    }
  }
  
  function display_message(current_state, new_state) {
    
    switch(new_state) {
      case 'connecting':
        message('Starting up the remote server on your computer...');
        break;

      case 'stopping':
        message('Stopping remote server on your computer...');
        break;

      case 'error':
        message('Error ' + current_state + ', which could be due to a network port blocking issue (which is outside of our control)', 'error');
        break;
    }
    
  }
  
  
  function flash(current_state, new_state) {
    
    if (new_state == 'started') {
      
      $('#welcome').fadeOut();
      $('#topbar').fadeIn();
      
      ENV = vnc.get_environment();

      var flashvars = {
        host: ENV.vnc_host,
        port: ENV.vnc_port,
        password: ENV.password,
        autoConnect: 'true',
        scale: 'true',
        viewOnly: 'false',
        hideControls: 'false'
      };
      
      if (ENV.policy_port != undefined) {
        $.extend(flashvars, {securityPort: ENV.policy_port});
      }
  
      var params = {
        allowFullscreen: "true",
        wmode: "opaque",
        allowScriptAccess: "always"
      };
      
      var attributes = {
        id: "flashlight",
        name: "flashlight"
      };
      
      swfobject.embedSWF("lib/flashlight.swf", "main-flash", "100%", "99%", "10.0.0","lib/expressInstall.swf", flashvars, params, attributes);

    } else if (new_state == 'stopping') {
      $('#welcome').fadeIn();
      $('#topbar').fadeOut();
      $('#main').html('<div id="main-flash"></div>');
    } else if (new_state == 'stopped') {
      $('#welcome #message').html('<span id="connect">Reconnect</span>');
    }
    
    
  }
  
  function modalDialog(title, contents, buttons) {
    if (buttons == undefined) {
      buttons = {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      };
    }
    $("#dialog-modal").html(contents);
    $("#dialog-modal").attr("title", title);
    $("#dialog-modal").dialog({
      modal: true,
      buttons: buttons
    });
  }
  
  function message(text, type) {
    if (type == undefined) {
      type = 'notice';
    }
    $('#message').fadeOut('fast').html(text).fadeIn('fast');
  }

  return ui;
  
}(jQuery);
