<?php
include "../config.php";


// grab JSON data sent by Angular
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$errors = array();

$voterId = $data['voterId'];
$mayor = $data['mayor'];
$vMayor = $data['vMayor'];
$counsilors = $data['counsilors'];
$brgyCaptain = $data['brgyCaptain'];
$brgyKagawads = $data['brgyKagawads'];
$brgySKChairman = $data['brgySKChairman'];
$brgySKKagawads = $data['brgySKKagawads'];

mysqli_autocommit($con, false); // turn off auto commit for transaction

// Add to tblvotes
$q = mysqli_query($con, "INSERT INTO tblvotes(VoterId, Mayor, ViceMayor, Counsilors, BarangayCaptain, BarangayKagawads, BarangaySKChairman, BarangaySKKagawads) VALUES('$voterId','$mayor', '$vMayor', '$counsilors', '$brgyCaptain', '$brgyKagawads', '$brgySKChairman', '$brgySKKagawads')");
if(!$q) {
    http_response_code(422);
    $errors[] = mysqli_error($con);
    $message['status'] = "Error";
}

if($mayor != "None"){
$q = mysqli_query($con, "UPDATE tblresults SET Votes = ");
}
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
