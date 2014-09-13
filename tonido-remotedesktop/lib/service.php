<?php

require_once '../lib/logger.class.php';
$l = new Logger();

$l->log('PHP: ajax/service.php called');

require_once '../lib/service.class.php';
header("Content-type: text/plain");

$action = $_GET['action'];

$l->log('PHP: ajax/service.php action is ' . $action);

switch($action) {
  case 'start':
    $l->log('PHP: ajax/service.php starting service');
    Service::start();
    break;
  case 'stop':
    $l->log('PHP: ajax/service.php stopping service');
    Service::stop();
    break;
  default:
    break;
}

$return = array(
  'action' => $action,
);

print json_encode($return);
