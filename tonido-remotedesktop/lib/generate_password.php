<?php

require_once 'logger.class.php';
$l = new Logger();
if (!getenv("TONIDO_PROFILE_NAME")) {
  putenv("TONIDO_PROFILE_NAME=cli-script");
}
require 'environment.class.php';

$plain_password = substr(md5(time() . getenv("TONIDO_PROFILE_NAME")), 0, 8);
preg_match('/VNC password is: (.+)$/', system('"' . __DIR__ .'\\third-party\\vncpwd.exe" /e:"' . $plain_password . '"'), $matches);
$encrypted_password = $matches[1];
$encrypted_password = preg_replace('/[\W]/', '', $encrypted_password);

Environment::update_env(array(
  'password' => $plain_password,
  'encrypted_password' => $encrypted_password,
));

$l->log('Generated a new password - plain is ' . $plain_password . ' and encrypted is ' . $encrypted_password);