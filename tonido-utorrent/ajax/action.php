<?php

require_once '../lib/utorrent.class.php';

header("Content-type: text/plain");

$action = $_GET['action'];
$hash = $_GET['hash'];
$uri = $_GET['uri'];

switch($action) {
  case 'start':
    $_UTORRENT->start_torrent($hash);
    break;
  case 'stop':
    $_UTORRENT->stop_torrent($hash);
    break;
  case 'pause':
    $_UTORRENT->pause_torrent($hash);
    break;
  case 'delete':
    $_UTORRENT->delete_torrent($hash);
    break;
  case 'add':
    $t = new utorrent_torrent();
    $t->set_url($uri);
    $_UTORRENT->add_torrent($t);
    break;
}

