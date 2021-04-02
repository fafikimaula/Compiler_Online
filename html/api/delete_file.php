<?php

include_once("config.php");

 $mysqli->set_charset("utf8");
 $hasil = '';

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    // Insert user data into table
    $result = mysqli_query($mysqli, "DELETE FROM file WHERE id=$id");

    if ($result) {
        $hasil =  array('pesan' => "Berhasil menghapus file", 'status' => true);
        echo json_encode($hasil);
    } else {
        $hasil =  array('pesan' => "Gagal menghapus file", 'status' => false);
        echo json_encode($hasil);
    }
}
