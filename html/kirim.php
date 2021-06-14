<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once "library/PHPMailer.php";
require_once "library/Exception.php";
require_once "library/OAuth.php";
require_once "library/POP3.php";
require_once "library/SMTP.php";
 
	$mail = new PHPMailer;
 
	//Enable SMTP debugging. 
	$mail->SMTPDebug = 3;                               
	//Set PHPMailer to use SMTP.
	$mail->isSMTP();            
	//Set SMTP host name                          
	$mail->Host = "tls://smtp.gmail.com"; //host mail server
	//Set this to true if SMTP host requires authentication to send email
	$mail->SMTPAuth = true;                          
	//Provide username and password     
	$mail->Username = "fafikitugas@gmail.com";   //nama-email smtp          
	$mail->Password = "tugasakhir123";           //password email smtp
	//If SMTP requires TLS encryption then set it
	$mail->SMTPSecure = "tls";                           
	//Set TCP port to connect to 
	$mail->Port = 587;                                   
 
	$mail->From = "fafikitugas@gmail.com"; //email pengirim
	$mail->FromName = "Ini adalah PHPmailer"; //nama pengirim

	$to      = $email; // Send email to our user
$subject = 'Signup | Verification'; // Give the email a subject 
$message = '
 
Thanks for signing up!
Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below.
 
------------------------
Name: '. $_REQUEST['nama'].'
Email: '.$_REQUEST['email'].'
------------------------
 
Please click this link to activate your account:
http://www.yourwebsite.com/verify.php?email='.$_REQUEST['email'].'&hash='.$_REQUEST['hash'].'
 
'; // Our message above including the link
                     
$headers = 'From:fafikitugas@gmail.com' . "\r\n"; // Set from headers
 
	$mail->addAddress($_REQUEST['email'], $_REQUEST['nama']); //email penerima
 
	$mail->isHTML(true);
 
	$mail->Subject = $subject; //subject
    $mail->Body    = $message; //isi email
    $mail->AltBody = $headers; //body email (optional)
 
	if(!$mail->send()) 
	{
	    echo "Mailer Error: " . $mail->ErrorInfo;
	} 
	else 
	{
	    echo "Message has been sent successfully";
	}

?>
