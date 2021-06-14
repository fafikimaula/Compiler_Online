<?php
session_start();
include_once("config.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once "../library/PHPMailer.php";
require_once "../library/Exception.php";
require_once "../library/OAuth.php";
require_once "../library/POP3.php";
require_once "../library/SMTP.php";

$mysqli->set_charset("utf8");
$hasil = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    $hash = md5( rand(0,1000) ); 

    // Insert user data into table
    $result = mysqli_query($mysqli, "INSERT INTO user(first_name,last_name,email,password,hash) VALUES('$first_name','$last_name','$email','$password','$hash')");

    if ($result) {
        $_SESSION['email'] = $email;

        $result = mysqli_query($mysqli, "SELECT * FROM user WHERE (email='$email')");

        $rowCheck = mysqli_num_rows($result);

        if ($rowCheck > 0) {
            while ($row = mysqli_fetch_array($result)) {
                $_SESSION['id'] = $row['id'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['first_name'] = $row['first_name'];
                $_SESSION['last_name'] = $row['last_name'];
                $_SESSION['photo'] = $row['photo'];
                $_SESSION['active'] = $row['active'];
                $_SESSION['hash'] = $row['hash'];
            }
        }

        // EMAIL 
         
            $mail = new PHPMailer;
         
            //Enable SMTP debugging. 
            $mail->SMTPDebug = 0;                               
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
            $mail->FromName = "Galaxy - Verifikasi Akun"; //nama pengirim
        
            $to      = $email; // Send email to our user
        $subject = 'Signup | Verification'; // Give the email a subject 
        $message = '
         
        Thanks for signing up!
        Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below.
         
        ------------------------
        Name: '.  $_SESSION['first_name'].' '.  $_SESSION['last_name'].'
        Email: '. $_SESSION['email'].'
        ------------------------
         
        Please click this link to activate your account:
        http://localhost:8080/verify.php?email='. $_SESSION['email'].'&hash='. $_SESSION['hash'].'
         
        '; // Our message above including the link
                             
        $headers = 'From:fafikitugas@gmail.com' . "\r\n"; // Set from headers
         
            $mail->addAddress( $_SESSION['email'],  $_SESSION['first_name'].' '.  $_SESSION['last_name']); //email penerima
         
            $mail->isHTML(true);
         
            $mail->Subject = $subject; //subject
            $mail->Body    = $message; //isi email
            $mail->AltBody = $headers; //body email (optional)
         
            if(!$mail->send()) 
            {
                $hasil =  array('pesan' => "Gagal Daftar\n$mail->ErrorInfo", 'status' => false);
        echo json_encode($hasil);
            } 
            else 
            {
                  // EMAIL 

        $hasil =  array(
            'pesan' => "Berhasil Daftar",
            'status' => true,
            'email' => $_SESSION['email'],
            'id' => $_SESSION['id'],
            'first_name' => $_SESSION['first_name'],
            'last_name' => $_SESSION['last_name'],
            'photo' => $_SESSION['photo'],
            'active' => $_SESSION['active'],
        );

        echo json_encode($hasil);
            }
  
        

      
    } else {
        $hasil =  array('pesan' => "Gagal Daftar", 'status' => false);
        echo json_encode($hasil);
    }
}
