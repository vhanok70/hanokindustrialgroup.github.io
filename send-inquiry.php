<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $to = "hanokindustrialgroup@gmail.com"; // YOUR EMAIL
  $subject = "New Sales Inquiry - Hanok Industrial Group";

  $body = "
  New Inquiry Received:

  Name: $name
  Email: $email
  Phone: $phone

  Requirement:
  $message
  ";

  $headers = "From: noreply@hanokindustrialgroup.in";

  mail($to, $subject, $body, $headers);

  echo "Thank you. Your inquiry has been sent.";
}
?>
