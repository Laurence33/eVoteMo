<?php
include "./config.php";


// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $data['id'];

$q = mysqli_query($con, "DELETE FROM `tblregistrations` WHERE id=$id;");

if (!$q) {
    //error
    http_response_code(422);
    $message['status'] = "Error";
} else {
    http_response_code(201);
    $message['status'] = "Success";
}

//reply
echo json_encode($message);
echo mysqli_error($con);
