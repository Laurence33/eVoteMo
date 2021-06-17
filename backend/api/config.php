<?php

//define headers
header('Access-Control-Allow-Origin: http://localhost:8100');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
// header('Content-Type: text/plain');
header('Content-Type: application/json, charset=utf-8');

$con = mysqli_connect("localhost:3306", "root", "", "evote") or die("Could not connect to DB");

// error_reporting(0);
