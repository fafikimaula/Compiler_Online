<?php
session_start();
include_once("config.php");

$mysqli->set_charset("utf8");
$hasil = '';

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $mysqli->set_charset("utf8");
    $hasil = '';
    if (isset($_REQUEST['search'])) {
        $search = $_REQUEST['search'];
        $hasil = mysqli_query($mysqli, "SELECT * FROM file WHERE name LIKE '%$search%' ORDER BY created_at DESC");
    } else if (isset($_REQUEST['history'])) {
        $id = $_SESSION['id'];
        $hasil = mysqli_query($mysqli, "SELECT * FROM file WHERE user_id=$id ORDER BY updated_at DESC");
    } else {
        $id = $_SESSION['id'];
        $hasil = mysqli_query($mysqli, "SELECT * FROM file WHERE user_id=$id ORDER BY created_at DESC");
    }
    // Fetch all file data from database

    $result = array();

    while ($dapatData = $hasil->fetch_assoc()) {
        $result[] = $dapatData;
    }
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    //echo json_last_error_msg();
}
$result = array();
