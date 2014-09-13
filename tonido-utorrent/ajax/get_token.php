<?php
$host = $_GET['host'];
$port = $_GET['port'];
$user = $_GET['user'];
$pass = $_GET['pass'];
$uri = $_GET['uri'];


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "http://$host:$port/gui/token.html");
curl_setopt($ch, CURLOPT_URL, $uri);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERPWD, $user . ':' . $pass);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);

ob_start();
$output = curl_exec($ch);
ob_end_clean();

curl_close($curl);

echo $output;