<?php

class Logger {
  private $logfile = '';
  
  public function __construct($filename = 'default.log') {
    $this->logfile = $filename;
  }
  
  public function log($message, $type = 'INFO') {
    $bt = debug_backtrace();
    $caller = array_shift($bt);
    
    $message = gmdate('Y, m d H:i:s') . ' [' . $type . ', ' . basename($caller['file']) . ', ' . $caller['line'] . "]\t\t" . $message . "\n";
    
    file_put_contents(__DIR__ . '\\..\\logs\\' . $this->logfile, $message, FILE_APPEND);
  }
  
  public function log_plain($message) {
    $message .= "\n";
    file_put_contents(__DIR__ . '\\..\\logs\\' . $this->logfile, $message, FILE_APPEND);
  }
}