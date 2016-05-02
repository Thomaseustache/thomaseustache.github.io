<?php
  require 'phpmailer/PHPMailerAutoload.php';
  include_once 'mail.php';
  $email = "contact@buyingpeers.com";
  $mail->setFrom("NOM", "email");
  // $mail->addReplyTo($email, $email);
  // $mail->addAddress("maxime.montegnies@gmail.com", "maxime.montegnies@gmail.com");
  // $mail->addAddress("maud.masson@being.fr", "maud.masson@being.fr");
  $mail->Subject = $object_m;
  $mail->msgHTML("test OK");
  $mail->AltBody = "test OK \n";
  if (!$mail->send()) {
    echo $mail->ErrorInfo;
  } else {
    echo "mail OK";
  }
?>
