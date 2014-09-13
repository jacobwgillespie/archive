<?php
require_once 'lib/service.class.php';
require_once 'lib/environment.class.php';

Environment::set_env(Environment::get_env());

Environment::update_env(array(
  'password' => '123',
  'test' => 'testing',
));


//Service::stop();
//Service::start();
