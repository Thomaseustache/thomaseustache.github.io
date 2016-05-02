<?php 


if(isset($_POST['submit'])){
	
    $to = "eustacht@gmail.com"; // this is your Email address
    $from = $_POST['mail']; // this is the sender's Email address
    $first_name = $_POST['nom'];
    $last_name = $_POST['prenom'];
	
    foreach ($_POST as $key => $value) {
		$message .= $key ."=>". $value;
	}
	
    // $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
	
}
	
	
?>