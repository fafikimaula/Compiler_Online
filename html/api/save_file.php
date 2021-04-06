<?php

include_once("config.php");

 $mysqli->set_charset("utf8");
 $hasil = '';

 if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $source_code = $_POST['source_code'];
    $language_code = $_POST['language_code'];
    $extention = $_POST['extention'];
    $id = $_POST['id'];

    // Insert user data into table
    $new_file = $mysqli->prepare("UPDATE file set name=?, source_code=?, language_code=?,extention=? WHERE id=?");
    //$new_file = mysqli_query($mysqli, "UPDATE file set source_code='$source_code' WHERE id='$id'");
    $new_file->bind_param('sssss',$name, $source_code , $language_code, $extention, $id);
    if ($new_file->execute()) {
        $hasil =  array('pesan' => "Berhasil menyimpan file", 'status' => true);
        echo json_encode($hasil);
    } else {
        $hasil =  array('pesan' => $mysqli->error, 'status' => false);
        echo json_encode($hasil);
    }
}
