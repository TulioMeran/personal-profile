<?php
    $to      = 'rtulio007@gmail.com';
    $subject = 'prueba con php';
    $message = 'aloha';
    $headers = 'From: webmaster@example.com'       . "\r\n" .
                 'Reply-To: webmaster@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Dique se mando esta vaina'
?>