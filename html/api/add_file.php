<?php

include_once("config.php");

 $mysqli->set_charset("utf8");
 $hasil = '';

 if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $source_code = $_POST['source_code'];
    $language_code = $_POST['language_code'];
    $extention = $_POST['extention'];
    $user_id = $_POST['user_id'];

    // Insert user data into table
   // $new_file = mysqli_query($mysqli, "INSERT INTO file(user_id,name,source_code,language_code,extention) VALUES('$user_id','$name','$source_code','$language_code','$extention')");
    $new_file = $mysqli->prepare("INSERT INTO file(user_id,name,source_code,language_code,extention) VALUES (?, ?, ?, ?, ?)");
    $new_file->bind_param("sssss", $user_id , $name, $source_code, $language_code, $extention);
    if ($new_file->execute()) {
        $hasil =  array('pesan' => "Berhasil menambah file baru", 'status' => true);
        echo json_encode($hasil);
    } else {
        $hasil =  array('pesan' => $mysqli->error, 'status' => false);
        echo json_encode($hasil);
    }
}
