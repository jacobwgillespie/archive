<!DOCTYPE html>
<html>
<head>
  <title>Remote Torrent Manager</title>
  <link rel="stylesheet" href="public/css/style.css">
  <link rel="stylesheet" href="css/jquery.ui.css">
  <script type="text/javascript">
    var WEBHOST = "<?php echo getenv("SERVER_NAME"); ?>";
    var WEBPORT = "<?php echo getenv("SERVER_PORT"); ?>";
  </script>
  <script src="js/jquery.js"></script>
  <script src="js/jquery.ui.js"></script>
  <script src="scripts/utorrent.js"></script>
  <script src="scripts/app.js"></script>
  <script src="scripts/main.js"></script>
</head>
<body>
  <div id="dialog-login" title="Login to &micro;Torrent">
    <p>
      Make sure your host computer is setup properly with <a href="http://utorrent.com" target="_blank">&micro;Torrent</a> and WebUI (<a href="#" id="instructions-show">show instructions</a>).
    </p>
    <p><form>
    <fieldset>
      <label for="username">Username</label>
      <input type="text" value="admin" name="username" id="username" class="text ui-widget-content ui-corner-all" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" class="text ui-widget-content ui-corner-all" />
      <label for="port">&micro;Torrent Port</label>
      <input type="text" value="49561" name="port" id="port" class="text ui-widget-content ui-corner-all" />
    </fieldset>
    </form></p>
    <div id="instructions">
	    <h2>Setup &micro;Torrent</h2>
	    <p>First, you need <a href="http://utorrent.com" target="_blank">&micro;Torrent</a> running on the same computer as Tonido</p>
	    <p>Next, enable WebUI by going to the preferences menu:</p>
	    <p><img src="public/images/step1.png" /></p>
	    <p>Choose WebUI on the left, check to enable, and enter a username and password:</p>
	    <p><img src="public/images/step2.png" /></p>
	    <p>If you have not changed your port number on this screen, your port is the same as the port found on the connection screen:</p>
	    <p><img src="public/images/step3.png" /></p>
	    <p>Enter that information in the form above and click login.</p>
	</div>
  </div>
  
  <div id="dialog-form" title="Add Torrent by URL">
    <form>
    <fieldset>
      <label for="uri">Torrent URL</label>
      <input type="text" name="uri" id="uri" class="text ui-widget-content ui-corner-all" />
    </fieldset>
    </form>
  </div>
  
  <div id="page" class="stack">
    <div class="stackContent">
      <h1><img src="public/images/logo.png" />Remote &micro;Torrent</h1>
      <button id="add-torrent">Add Torrent by URI</button>
      <div id="placeholder">
        <div class="loading"><img alt="loading" src="public/images/loading.gif"/></div>
      </div>
    </div>
  </div>
</body>
</html>