<?php

$request = new StdClass();
$request->slug = stripslashes('Akismet');
$post_data = array(
    'action' => 'plugin_information',
    'request' => serialize($request)
);
var_dump($post_data);

$options = array(
    CURLOPT_URL => 'http://api.wordpress.org/plugins/info/1.0/',
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $post_data,
    CURLOPT_RETURNTRANSFER => true
);
$handle = curl_init();
curl_setopt_array($handle, $options);
$response = curl_exec($handle);
curl_close($handle);
$plugin_info = unserialize($response);
var_dump($plugin_info->download_link);