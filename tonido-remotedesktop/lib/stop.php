<?php

require_once '../lib/logger.class.php';
$l = new Logger();

require_once 'service.class.php';

Service::stop();
$l->log('Stopped the service...');

print '{}';
