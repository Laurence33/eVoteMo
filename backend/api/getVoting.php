<?php
include "./config.php";


// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();


$q = mysqli_query($con, "SELECT Voting from `tblvoting` WHERE id=1  ");

if ($q) {
    $votings = mysqli_fetch_assoc($q);
    http_response_code(201);
    $message['status'] = "Success";
    $message['Voting']  = $votings['Voting'];
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

//reply
echo json_encode($message);
echo mysqli_error($con);
