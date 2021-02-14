<?php
    $postData = file_get_contents('php://input');
    $test = file_get_contents('./../data/lab2.json');
    
    file_put_contents('./../data/lab2.json', $postData);
?>