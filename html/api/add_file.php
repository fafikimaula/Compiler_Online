<?php

include_once("config.php");

 $mysqli->set_charset("utf8");
 $hasil = '';

 if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $source_code = $_POST['source_code'];
    $language_code = $_POST['language_code'];
    $extention = $_POST['extention'];

    // Insert user data into table
    $new_file = mysqli_query($mysqli, "INSERT INTO file(name,source_code,language_code,extention) VALUES('$name','$source_code','$language_code','$extention')");

    if ($new_file) {
        $hasil =  array('pesan' => "Berhasil menambah file baru", 'status' => true);
        echo json_encode($hasil);
    } else {
        $hasil =  array('pesan' => "Gagal menambah file baru", 'status' => false);
        echo json_encode($hasil);
    }
}
