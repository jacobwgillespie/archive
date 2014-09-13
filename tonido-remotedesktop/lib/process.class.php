<?php

/*
 * Class for starting and stopping background processes
 * 
 * Uses psexec, pskill, and pslist - managed using pid files
 * 
 * Copyright (c) 2011 Jacob Gillespie
 * http://jacobwg.com
 * All rights reserved.
 */

include_once 'dir.fix.php';
require_once 'logger.class.php';

$log = new Logger();
 
 
$psexec = '"' . __DIR__ . '\\third-party\\psexec.exe" /accepteula ';
$pskill = '"' . __DIR__ .'\\third-party\\pskill.exe" /accepteula ';
$pslist = '"' . __DIR__ .'\\third-party\\pslist.exe" /accepteula ';

$piddir = __DIR__ . '\\env\\pids\\';
 
class Process {

  private function __construct() {}
  
  public static function running($name) {
    if (Process::pid_exists($name)) {
      if(Process::process_running($name)) {
        return true;
      } else {
        Process::delete_pid($name);
        return false;
      }
    }
    return false;
  }
  
  private static function pid_file($name) {
    global $piddir, $log;
    return $piddir . $name . '.pid';
  }
  
  private static function pid_exists($name) {
    return file_exists(Process::pid_file($name));
  }
  
  private static function get_pid($name) {
    return file_get_contents(Process::pid_file($name));
  }
  
  private static function create_pid($name, $pid) {
    file_put_contents(Process::pid_file($name), $pid);
  }
  
  private static function delete_pid($name) {
    unlink(Process::pid_file($name));
  }
  
  private static function process_running($name) {
    global $pslist;
    
    $pid = Process::get_pid($name);
    
    $pipespec = array(
      0 => array("pipe", "r"),   // stdin
      1 => array("pipe", "w"),   // stdout
      2 => array("pipe", "r")    // stderr
    );
    
    $process = proc_open($pslist . $name, $pipespec, $pipes);
    
    if (is_resource($process)) {
      // we don't need these
      fclose($pipes[0]);
      $val = stream_get_contents($pipes[1]);
      fclose($pipes[1]);
      fclose($pipes[2]);
      
      $pattern = '/(' . $name . ')\s+(' . $pid . ')/';

      preg_match($pattern, $val, $matches);
      
      return (count($matches) != 0);
    }
    return false;
  }

  public static function start($name, $command, $background=true) {
    global $log, $psexec;
    
    if (!$background) {
      system($psexec . $command);
      $log->log('Started ' . $name . ' with command ' . $psexec . $command);
      return true;
    } else {
      if (!Process::running($name)) {
        system($psexec . '-d ' . $command, $pid);
        $log->log('Started ' . $name . ' in the background with command ' . $psexec . '-d ' . $command);
        Process::create_pid($name, $pid);
        return $pid;
      } else {
        $log->log('Failed to start... a process with the name ' . $name . ' was already running');
        return false;
      }
    }
  }
  
  public static function stop($name) {
    global $log, $pskill;
    if (Process::running($name)) {
      $log->log('Killed process ' . $name);
      system($pskill . Process::get_pid($name));
      Process::delete_pid($name);
    } else {
      $log->log('Did not kill ' . $name . ' as it was not running');
    }
    
    return true;
  } 
  
}