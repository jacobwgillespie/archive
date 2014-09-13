<?php

/*
 * Class for managing an environment state with settings
 * 
 * Uses a plain JSON file to save state
 * 
 * Copyright (c) 2011 Jacob Gillespie
 * http://jacobwg.com
 * All rights reserved.
 */

include_once 'dir.fix.php';
require_once 'logger.class.php';

$log = new Logger();

$envfile = __DIR__ . '\\env\\environment.env';
 
class Environment {

  private function __construct() {}
  
  public static function env_exists() {
    global $envfile;
    return file_exists($envfile);
  }
  
  public static function get_env() {
    global $envfile;
    if (Environment::env_exists()) {
      return json_decode(file_get_contents($envfile), true);
    } else {
      return array();
    }
  }
  
  public static function set_env($env) {
    global $envfile, $log;
    $log->log('Replaced env with the following: ' . print_r($env, true));
    file_put_contents($envfile, json_encode($env));
  }
  
  public static function delete_env($name) {
    global $envfile;
    unlink($envfile);
  }
  
  public static function update_env($env) {
    global $log;
    $log->log('Updated env with the following: ' . print_r($env, true));
    Environment::set_env(array_merge(Environment::get_env(), $env));
  }
  
  public static function default_env($env) {
    Environment::set_env(array_merge($env, Environment::get_env()));
  }
}