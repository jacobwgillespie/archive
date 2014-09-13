<?php

require_once '../lib/logger.class.php';
$l = new Logger();

$l->log('PHP: ajax/start.php called');

function port_open($port, $host='127.0.0.1') {
  $conn = @fsockopen($host, $port, $errno, $errstr, 0.2);
  if ($conn) {
    fclose($conn);
    return false;
  }
  return true;
}

require_once 'environment.class.php';
require_once 'service.class.php';

header("Content-type: text/plain");

Service::stop();

Environment::set_env(array(
  "installed" => false,
  "vnc_port" => 5900,
  "policy_host" => $_GET['policy_host'],
  "policy_port" => 1234,
  "password" => "",
  "success" => false,
  "vnc_port_open" => false,
  "policy_port_open" => false,
  "encrypted_password" => ""
));

$env = Environment::get_env();

$l->log('Attempting to start the service in the following environment: ' . json_encode($env));
Service::start();

$trys = 0;
$success = false;
$vnc_running = false;
$policy_running = false;
while ((!$success) && ($trys < 20)) {
  if (!$vnc_running)
    $vnc_running = !port_open($env['vnc_port']);
  if (!$policy_running)
    $policy_running = !port_open($env['policy_port'], $env['policy_host']);
  if ($vnc_running && $policy_running)
	$success = true;
  $trys++;
  usleep(500000);
}

$env = Environment::get_env();

if ($success) {
  $l->log('Service started successfully');
  Environment::update_env(array(
    'success' => true,
  ));
} else {
  $l->log('Service did not start');
  Environment::update_env(array(
    'success' => false,
  ));
}

print json_encode(Environment::get_env());
