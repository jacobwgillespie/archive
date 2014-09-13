<?php


$contents = '';

$handle = @fopen("php://stdin", "r");
if ($handle) {
    while (($buffer = fgets($handle, 4096)) !== false) {
        $contents .= $buffer;
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}

echo json_encode(unserialize($contents));