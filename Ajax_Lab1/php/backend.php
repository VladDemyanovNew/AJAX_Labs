<?php
    $now = new DateTime();
    $now->setTimezone(new DateTimeZone('Europe/Minsk'));
    echo $now->format('Y-m-d H:i:s');
?>