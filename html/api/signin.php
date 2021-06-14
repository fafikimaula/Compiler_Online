<?php
session_start();
include_once("config.php");

$mysqli->set_charset("utf8");
$hasil = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = trim($_POST['email']);
    $password = md5($_POST["password"]);

    include_once 'config.php';

    // Query search user
    $result = mysqli_query($mysqli, "SELECT * FROM user WHERE (email='$email') AND (password='$password')");

    // Cek data 
    $rowCheck = mysqli_num_rows($result);
    if ($rowCheck > 0) {
        while ($row = mysqli_fetch_array($result)) {
            // Start session
            $_SESSION['email'] = $row['email'];
            $_SESSION['id'] = $row['id'];
            $_SESSION['first_name'] = $row['first_name'];
            $_SESSION['last_name'] = $row['last_name'];
            $_SESSION['photo'] = $row['photo'];
            $_SESSION['active'] = $row['active'];
        }
        $hasil =  array(
            'pesan' => "Berhasil Masuk", 
            'status' => true,
            'email' => $_SESSION['email'],
            'id' =>  $_SESSION['id'],
            'first_name' => $_SESSION['first_name'],
            'last_name' => $_SESSION['last_name'],
            'photo' =>  $_SESSION['photo'],
            'active' =>  $_SESSION['active'],
        );


        echo json_encode($hasil);
    } else {
        $hasil =  array('pesan' => "Gagal Masuk", 'status' => false);
        echo json_encode($hasil);
    }
}
