<?php

require_once '../lib/logger.class.php';
$l = new Logger();

require 'environment.class.php';
header("Content-type: text/plain");

$key = $_GET['key'];
$value = $_GET['value'];

$l->log('Updating environment: ' . $key . ' => ' . $value);

Environment::update_env(array($key => $value));

$return = array(
  'key' => $key,
  'value' => $value
);

print json_encode($return);
