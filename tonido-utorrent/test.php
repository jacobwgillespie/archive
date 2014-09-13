<?php
require_once 'lib/utorrent.class.php';

$xut = new utorrent('localhost','49561','admin','admin');
print_r($xut->getUpdate());
