<?php 
  require_once 'lib/logger.class.php';
  $l = new Logger();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Remote Desktop</title>
  <link rel="stylesheet" href="public/css/style.css">
  <link rel="stylesheet" href="public/css/jquery.ui/custom.css">
  <script type="text/javascript">
    var WEBHOST = "<?php echo getenv("SERVER_NAME"); ?>";
    var WEBPORT = "<?php echo getenv("SERVER_PORT"); ?>";
  </script>
  <script src="scripts/jquery-1.5.min.js"></script>
  <script src="scripts/jquery.ui.js"></script>
  <script src="scripts/sexy.js"></script>
  <script src="scripts/swfobject.js"></script>
  <script src="scripts/state.js"></script>
  <script src="scripts/vnc.js"></script>
  <script src="scripts/ui.js"></script>
  <script src="scripts/main.js"></script>
</head>
<body>
  <div id="dialog-modal" title="">
  </div>
  
  <div id="topbar">
    <div id="topbar-content">
      <span id="disconnect" class="disabled">Disconnect</span>
    </div>
    <img class="close" src="public/images/close.png" />
  </div>
  
  <div id="topbar-open">
    <img class="close" src="public/images/open.png" />
  </div>

  <div id="messages"></div>
  
  <div id="welcome">
    <h1>Remote Desktop for Tonido</h1>
    <p id="message"><span id="connect">Start and Connect</span></p>
    <h2>Custom VNC Connection</h2>
    <p>Already have a VNC server you'd like to connect to?  Details, please!</p>
    <form action="#" onsubmit="VNC.custom_connect($('#custom_host').val(), $('#custom_port').val(), $('#custom_pass').val()); return false;">
      <div id="custom-inputs">
        <label for="custom_host" class="inlined">Host</label>
        <input type="text" class="input-text" id="custom_host" />
        <label for="custom_port" class="inlined">Port</label>
        <input type="text" class="input-text" id="custom_port" />
        <label for="custom_pass" class="inlined">Password</label>
        <input type="password" class="input-text" id="custom_pass" />
      </div>
      <input type="submit" id="custom-connect" value="Connect to Custom Server"/>
    </form>
  </div>
  
  <div id="main">

    <div id="main-flash"></div>
    
  </div>
</body>
</html>
<?php 
  $l->log('Page sent to browser');
?>