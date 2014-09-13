<?php

/*
 * Class for getting and receiving passwords from a SQLite database
 * 
 * Copyright (c) 2011 Jacob Gillespie
 * http://jacobwg.com
 * All rights reserved.
 */


include_once 'dir.fix.php';
 
class PasswordManager {
  
  private static $db = null;
  
  private function __construct() {}
  
  private static function require_connection() {
    if (self::$db == null) {
      self::$db = new PDO('sqlite:'. __DIR__ . '\\db.sqlite');
    }
  }
  
  public static function get($key) {
    self::require_connection();
    
    try {
      $results = self::$db->query('SELECT * FROM main.passwords WHERE key=' . self::$db->quote($key));
      if ($row = $results->fetch(PDO::FETCH_ASSOC)) {
        return $row['password'];
      } else {
        return false;
      }
    } catch (PDOException $e) {
      return false;
    }
  }
  
  public static function set($key, $pass) {
    self::require_connection();
    
    try
    {
      if (self::get($key, null) == null) {
        self::$db->exec('INSERT INTO main.passwords (key, password) VALUES (' . self::$db->quote($key) . ', ' . self::$db->quote($pass) . ')');
      } else {
        self::$db->exec('UPDATE main.passwords SET password=' . self::$db->quote($pass) . ' WHERE key=' . self::$db->quote($key));
      }
      return true;
    } catch(PDOException $e) {
      return false;
    }
  } 
  
}