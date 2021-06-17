<?php
include "config.php";

// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$email = $data['email'];
$password = md5($data['password']);

$q = mysqli_query($con, "SELECT * FROM tbllogin WHERE `Email`='$email' AND `Password`='$password';");

if (mysqli_num_rows($q) == 1) {
    http_response_code(201);
    $message['status'] = "Success";
    if ($email == 'admin@admin.com') {
        $_SESSION['alogin'] = "admin";
    } else {
        $_SESSION['login'] = $email;
    }
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

//reply
echo json_encode($message);
echo mysqli_error($con);
