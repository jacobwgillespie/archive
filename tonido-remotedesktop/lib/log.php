<?php 

require_once '../lib/logger.class.php';
$l = new Logger();

header("Content-type: text/plain");

$message = urldecode($_GET['message']);

$l->log_plain($message);

print '{}';
