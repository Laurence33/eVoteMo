<?php
include "./config.php";


// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$voting = $data['voting'];

$q = mysqli_query($con, "UPDATE `tblvoting` SET Voting='$voting'");

if ($q) {
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

//reply
echo json_encode($message);
echo mysqli_error($con);
