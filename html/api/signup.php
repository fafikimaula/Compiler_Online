<?php
session_start();
include_once("config.php");

$mysqli->set_charset("utf8");
$hasil = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    // Insert user data into table
    $result = mysqli_query($mysqli, "INSERT INTO user(first_name,last_name,email,password) VALUES('$first_name','$last_name','$email','$password')");

    if ($result) {
        $_SESSION['email'] = $email;

        $result = mysqli_query($mysqli, "SELECT * FROM user WHERE (email='$email')");

        $rowCheck = mysqli_num_rows($result);

        if ($rowCheck > 0) {
            while ($row = mysqli_fetch_array($result)) {
                $_SESSION['id'] = $row['id'];
                $_SESSION['first_name'] = $row['first_name'];
                $_SESSION['last_name'] = $row['last_name'];
                $_SESSION['photo'] = $row['photo'];
            }
        }

        $hasil =  array(
            'pesan' => "Berhasil Daftar",
            'status' => true,
            'email' => $_SESSION['email'],
            'id' => $_SESSION['id'],
            'first_name' => $_SESSION['first_name'],
            'last_name' => $_SESSION['last_name'],
            'photo' => $_SESSION['photo'],
        );

        echo json_encode($hasil);
    } else {
        $hasil =  array('pesan' => "Gagal Daftar", 'status' => false);
        echo json_encode($hasil);
    }
}
