<?php

require_once '../lib/utorrent.class.php';

header("Content-type: text/plain");

if ($_GET['cache'] != NULL && $_GET['cache'] != '')
  print json_encode($_UTORRENT->getUpdate($_GET['cache']));
else
  print json_encode($_UTORRENT->getUpdate());