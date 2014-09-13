<?php

/*
 * Class for starting and stopping the VNC and flash policy server
 * 
 * Copyright (c) 2011 Jacob Gillespie
 * http://jacobwg.com
 * All rights reserved.
 * 
 */

require_once 'environment.class.php';
require_once 'process.class.php';

$vncpwd = '"' . __DIR__ . '\\third-party\\php\\php.exe" -q "' . __DIR__ . '\\generate_password.php" ';
$winvnc = '"' . __DIR__ . '\\third-party\\winvnc4.exe" ';
$policy = '"' . __DIR__ . '\\third-party\\php\\php.exe" -q "' . __DIR__ . '\\policy.php" ';

class Service {

  private function __construct() {}
  
  public static function start() {
    global $winvnc, $policy;

    self::generate_password();
    $env = Environment::get_env();
    
    $vnc  = $winvnc;
    $vnc .= 'Password=' . $env['encrypted_password'] . ' ';
    $vnc .= 'PortNumber=' . $env['vnc_port'] . ' ';
    $vnc .= 'SecurityTypes=VncAuth ';
    $vnc .= 'QueryConnect=false';
    
    $pol  = $policy;
    $pol .= $env['policy_port'] . ' ' . $env['policy_host'];
    
    Process::start('winvnc4', $vnc);
    Process::start('php', $pol);
  }
  
  public static function stop() {
    Process::stop('winvnc4');
    Process::stop('php');
  }
  
  
  /* 
   * Generates a random temporary password
   */
  public static function generate_password() {
    global $vncpwd;
    Process::start('php', $vncpwd, false);
  } 
  
}