<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'mehtameet12@gmail.com';
$subject = 'New message from website';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

mail($to, $subject, $body);

echo 'Message sent!';
?>
