<?php
include "./config.php";


// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$position = $data['Position'];
$candidateNumber = $data['CandidateNumber'];
$fullName = $data['FullName'];
$nickname = $data['Nickname'];

$q = mysqli_query($con, "INSERT INTO `tblcandidates` ( `Position`, `CandidateNumber`, `FullName`, `Nickname`) VALUES ( '$position', $candidateNumber, '$fullName', '$nickname');");

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
