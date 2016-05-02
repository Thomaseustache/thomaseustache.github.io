<?php
  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->Host = 'mail.hungariasport.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'matchcustom@hungariasport.com';
  $mail->Password = '7eCuWU9gM285j';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $mail->CharSet  = 'UTF-8';
?>
