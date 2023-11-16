<?php

$host = "localhost";
$dbname = "Database";
$username = "root";
$password = "";

$mysqli = new mysqli($host, $username, $password, $dbname);

if ($mysqli->connect_error)
    {
        die('Connection Failed : '.$mysqli->connect_error);
    }

return $mysqli;
?>