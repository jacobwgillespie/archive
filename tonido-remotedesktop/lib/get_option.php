<?php

require_once '../lib/logger.class.php';
$l = new Logger();

require '../lib/environment.class.php';
header("Content-type: text/plain");

$key = $_GET['key'];

$l->log('PHP: ajax/get_option.php key is ' . $key . ' and default value is ' . $default);

$return = array(
  'key' => $key,
  'value' => Options::get($key, $default)
);

print json_encode($return);

$l->log('PHP: ajax/get_option.php returned ' . json_encode($return));