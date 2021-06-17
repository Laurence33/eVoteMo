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

$q = mysqli_query($con, "SELECT * FROM tblvotes WHERE voterId=$voterId");
if (mysqli_num_rows($q) == 1) {
    $errors[] = "Already casted vote.";
} else {
    // Add to tblvotes
    $q = mysqli_query($con, "INSERT INTO tblvotes(VoterId, Mayor, ViceMayor, Counsilors, BarangayCaptain, BarangayKagawads, BarangaySKChairman, BarangaySKKagawads) VALUES('$voterId','$mayor', '$vMayor', '$counsilors', '$brgyCaptain', '$brgyKagawads', '$brgySKChairman', '$brgySKKagawads')");
    if (!$q) {
        http_response_code(422);
        $errors[] = mysqli_error($con);
        $message['status'] = "Error";
    }

    if ($mayor != "None") {
        $q = mysqli_query($con, "UPDATE tblcandidates SET Votes = Votes + 1 WHERE FullName = '$mayor' AND Position='Mayor'");
    }

    if ($vMayor != "None") {
        $q = mysqli_query($con, "UPDATE tblcandidates SET Votes = Votes + 1 WHERE FullName = '$vMayor' AND Position='Vice Mayor'");
    }


    //counsilors
    if ($counsilors != "None") {
        foreach ($counsilors as $counsilor) {
            $q = mysqli_query($con, "UPDATE tblcandidates SET Votes = Votes + 1 WHERE FullName = '$counsilor' AND Position='Counsilor'");
        }
    }

    if ($brgyCaptain != "None") {
        $q = mysqli_query($con, "UPDATE tblcandidates SET Votes = Votes + 1 WHERE FullName = '$brgyCaptain' AND Position='Barangay Captain'");
    }

    //brgy KAgawads
    if ($brgyKagawads != "None") {
        foreach ($brgyKagawads as $brgyKagawad) {
            $q = mysqli_query($con, "UPDATE tblcandidates SET Votes = Votes + 1 WHERE FullName = '$brgyKagawad' AND Position='Barangay Kagawad'");
        }
    }

    if ($brgySKChairman != "None") {
        $q = mysqli_query($con, "UPDATE tblcandidates SET Votes = Votes + 1 WHERE FullName = '$brgySKChairman' AND Position='Barangay SK Chairman'");
    }

    //brgy SK Kagawads
    if ($brgySKKagawads != "None") {
        foreach ($brgySKKagawads as $skKagawad) {
            $q = mysqli_query($con, "UPDATE tblcandidates SET Votes = Votes + 1 WHERE FullName = '$brgyCaptain' AND Position='Barangay SK Kagawad'");
        }
    }

    if ($q) {
        http_response_code(201);
        $message['status'] = "Success";
    } else {
        http_response_code(422);
        $message['status'] = "Error";
    }
}



//reply
echo json_encode($message);
echo mysqli_error($con);
