<?php
include "../config.php";


// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$fName = $data['fName'];
$mName = $data['mName'];
$lName = $data['lName'];
$age = $data['age'];
$email = $data['email'];
$birthdate = $data['birthdate'];
$gender = $data['gender'];
$voterId = $data['voterId'];
$password = md5($data['password']);

$q = mysqli_query($con, "INSERT INTO `tblregistrations` ( `FirstName`, `MiddleName`, `LastName`, `Age`, `Email`, `Birthdate`, `Gender`, `VoterId`, `Password`) VALUES ( '$fName', '$mName', '$lName', $age, '$email', '$birthdate', '$gender', $voterId, '$password');");

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
