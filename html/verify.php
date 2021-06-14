<?php
include_once("api/config.php");


if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash'])){
    // Verify data
    $email = $_GET['email']; // Set email variable
    $hash = $_GET['hash']; // Set hash variable
            
    
    $result = mysqli_query($mysqli, "SELECT email, hash, active FROM user WHERE email='".$email."' AND hash='".$hash."' AND active='0'");
    
    echo $mysqli->error;
    // Cek data 
    $rowCheck = mysqli_num_rows($result);
    if ($rowCheck > 0) {
        // We have a match, activate the account
        mysqli_query($mysqli, "UPDATE user SET active='1' WHERE email='".$email."' AND hash='".$hash."' AND active='0'");
        
        echo '<div class="statusmsg">Your account has been activated, you can now login</div>';
    }else{
        // No match -> invalid url or account has already been activated.
        echo '<div class="statusmsg">The url is either invalid or you already have activated your account.</div>';
    }
                 
}else{
    // Invalid approach
    echo '<div class="statusmsg">Invalid approach, please use the link that has been send to your email.</div>';
}