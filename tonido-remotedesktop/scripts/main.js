var Logger = function($) {
  
  var logger = {};
  
  logger.log = function(message, type) {
    if(type == undefined) {
      type = 'INFO';
    }
    d = new Date();
    message = d.getUTCFullYear() + ' ' + d.getUTCMonth() + ' ' + d.getUTCDate() + ' ' + d.getUTCHours() + ' ' + d.getUTCMinutes() + ' ' + d.getUTCSeconds() + ' [' + type + '] JS:  ' + message;
    
    $.get('lib/log.php', {message: message});
  };
  
  return logger;
  
}(jQuery);


$(function() {
  
  $("label.inlined + input.input-text").each(function (idx, el) {
    if($(el).val() == "") {
      $(el).prev("label.inlined").removeClass("has-text").removeClass("focus");
    }
    
    $(el).focus(function () {
      $(el).prev("label.inlined").addClass("focus");
    });
     
    $(el).keypress(function () {
      $(el).prev("label.inlined").addClass("has-text").removeClass("focus");
    });
     
    $(el).blur(function () {
      if($(el).val() == "") {
        $(el).prev("label.inlined").removeClass("has-text").removeClass("focus");
      }
    });
  });

  VNC_UI.bind_to('main', VNC);
  //VNC.connect();
});

