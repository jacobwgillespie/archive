<?php 

echo file_get_contents('http://localhost:8080/xbmcCmds/xbmcHttp?command=' . $_REQUEST['command']);