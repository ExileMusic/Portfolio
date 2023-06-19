<?php
$to      = $_POST["email"];
$subject = 'Contact portfolio '. $_POST["name"];
$message = $_POST["message"];
$headers = 'From: Portfolio automater <no-reply@exile_music.com>';
echo $to . PHP_EOL . $subject . PHP_EOL . $message . PHP_EOL . $headers;
mail($to, $subject, $message, $headers);
?>