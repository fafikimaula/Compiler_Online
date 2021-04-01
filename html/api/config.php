<?php

$databaseHost = 'localhost';
$databaseName = 'galaxy';
// $databaseUsername = 'ardianba_tugas';
// $databasePassword = '+--%8ps##j!%';
$databaseUsername = 'root';
$databasePassword = '';
$databasePort = '3306';

$mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName, $databasePort); 

?>
