<?php
$user = $_GET['user'];
$pass = $_GET['pass'];
$uri = $_GET['uri'];


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $uri);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

if ($user != NULL) {
  curl_setopt($ch, CURLOPT_USERPWD, $user . ':' . $pass);
  curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
}

ob_start();
$output = curl_exec($ch);
ob_end_clean();

curl_close($curl);

echo $output;