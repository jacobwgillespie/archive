<?php

header("Content-type: text/plain");

$lines = file("logs//default.log");

sort(file("logs//default.log"));

print implode("", $lines);
