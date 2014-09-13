<?php

require_once '../lib/logger.class.php';
$l = new Logger();

function port_open($port, $host='127.0.0.1') {
  $conn = @fsockopen($host, $port, $errno, $errstr, 0.2);
  if ($conn) {
    fclose($conn);
    return false;
  }
  return true;
}

require '../lib/environment.class.php';
header("Content-type: text/plain");

Environment::default_env(array(
  'installed' => false,
  'vnc_port' => 5900,
  'policy_host' => '127.0.0.1',
  'policy_port' => 1234,
  'password' => 'password',
  'success' => false,
));

$env = Environment::get_env();

Environment::update_env(array(
  'vnc_port_open' => port_open($env['vnc_port']),
  'policy_port_open' => port_open($env['policy_port'], $env['policy_host']),
));

$env = Environment::get_env();

print json_encode($env);

$l->log('Returned the following environment: ' . json_encode($env));
