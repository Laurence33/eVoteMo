<?php
include "./config.php";


// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $data['id'];

$q = mysqli_query($con, "SELECT * FROM tblregistrations WHERE id=$id");
$data = mysqli_fetch_assoc($q);

$firstName = $data['FirstName'];
$middleName = $data['MiddleName'];
$lastName = $data['LastName'];
$age = $data['Age'];
$email = $data['Email'];
$birthdate = $data['Birthdate'];
$gender = $data['Gender'];
$voterId = $data['VoterId'];
$password = $data['Password'];

mysqli_autocommit($con, false); // turn off auto commit for transaction
$q = mysqli_query($con, "INSERT INTO `tbllogin` (`Email`, `Password`) VALUES ('$email', '$password');");
$lastId = mysqli_insert_id($con);
$q = mysqli_query($con, "INSERT INTO `tblvoters` ( `UserId`, `FirstName`, `MiddleName`, `LastName`, `Age`, `Email`, `Birthdate`,`Gender`, `VoterId`) VALUES ( '$lastId','$firstName', '$middleName', '$lastName', $age, '$email', '$birthdate', '$gender', '$voterId');");

$q = mysqli_query($con, "DELETE FROM `tblregistrations` WHERE id=$id;");

//finally commit the changes and return the result
if (!mysqli_commit($con)) {
    //error
    mysqli_rollback($con);
    mysqli_autocommit($con, true);
    http_response_code(422);
    $message['status'] = "Error";
} else {
    mysqli_autocommit($con, true);

    http_response_code(201);
    $message['status'] = "Success";
    //reply
    echo json_encode($message);
    echo mysqli_error($con);
}
