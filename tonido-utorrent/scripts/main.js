$(function() {
	

  
  var d = $( "#dialog-login" ).dialog({
    autoOpen: true,
    height: 320,
    width: 300,
    modal: true,
    buttons: {
      "Login": function() {
        uTorrent.setup({
          port: $('#port').val(),
          username: $('#username').val(),
          password: $('#password').val(),
        });
        App.load_ui();
        $(this).dialog("close");
      }
    }
  });
  
	$('#instructions-show').click(function() {
		$('#instructions').slideDown();
		d.dialog("option", "width", 720);
		d.dialog("option", "height", 620);
		d.dialog("option", "position", "center");
	});
  
});

