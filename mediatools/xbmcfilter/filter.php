<?php


function callApi($command) {
	$text = file_get_contents('http://localhost:8080/xbmcCmds/xbmcHttp?command=' . $command);
	$text = str_ireplace('<li>', '', $text);
	$text = str_ireplace('<html>', '', $text);
	$text = str_ireplace('</html>', '', $text);
	$array = split("\n", $text);
	
	$return = array();
	
	foreach($array as $element) {
		if($element) {
			$parts = split(':', $element);
			$return[$parts[0]] = implode(':', array_slice($parts, 1));
		}
	}
	
	return $return;
}


function msg($message, $level='INFO') {
	print date("Y-m-d H:i:s") . ' [' . $level . '] ' . $message . "\n";
}

function mute() {
	msg('Muting');
	callApi('SetVolume(0)');
}

function unmute() {
	msg('Unmuting');
	callApi('SetVolume(100)');
}
while(true) {
	$api = callApi('GetCurrentlyPlaying');
	
	msg('Current Timecode is ' . $api['Time']);
	
	$time = split(':', $api['Time']);
	
	$seconds = intval($time[2]);
	
	if ($seconds > 10 && $seconds < 20) {
		mute();
	} elseif ($seconds > 30 && $seconds < 40) {
		mute();
	} elseif ($seconds > 50 && $seconds < 59) {
		mute();
	} else {
		unmute();
	}
	
}
