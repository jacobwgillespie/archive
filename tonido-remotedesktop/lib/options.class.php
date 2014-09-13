<?php

/*
 * Class for getting and receiving options from a SQLite database
 * 
 * Copyright (c) 2011 Jacob Gillespie
 * http://jacobwg.com
 * All rights reserved.
 */


include_once 'dir.fix.php';
 
class Options {
  
  private static $db = null;
  
  private function __construct() {}
  
  private static function require_connection() {
    if (self::$db == null) {
      self::$db = new PDO('sqlite:'. __DIR__ . '\\db.sqlite');
    }
  }
  
  public static function get($key, $default='') {
    self::require_connection();
    
    try {
      $results = self::$db->query('SELECT value FROM main.prefs WHERE key=' . self::$db->quote($key));
      if ($row = $results->fetch(PDO::FETCH_ASSOC)) {
        return $row['value'];
      } else {
        return $default;
      }
    } catch (PDOException $e) {
      return false;
    }
  }
  
  public static function set($key, $value) {
    self::require_connection();
    
    try
    {
      if (self::get($key, null) == null) {
        self::$db->exec('INSERT INTO main.prefs (key, value) VALUES (' . self::$db->quote($key) . ', ' . self::$db->quote($value) . ')');
      } else {
        self::$db->exec('UPDATE main.prefs SET value=' . self::$db->quote($value) . ' WHERE key=' . self::$db->quote($key));
      }
      return true;
    } catch(PDOException $e) {
      return false;
    }
  } 
  
}