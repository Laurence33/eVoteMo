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
    $account = mysqli_fetch_assoc($q);
    $message['account'] = $account;
    if ($email == 'admin@admin.com') {
        $_SESSION['alogin'] = "admin";
    } else {
        $_SESSION['login'] = $email;
        $accId = $account['id'];
        $q = mysqli_query($con, "SELECT * FROM tblvoters WHERE UserId=$accId");
        $profile = mysqli_fetch_assoc($q);
        $message['profile'] = $profile;
    }
    http_response_code(201);
    $message['status'] = "Success";
} else {
    http_response_code(422);
    $message['status'] = "Error" . mysqli_error($con);
}

//reply
echo json_encode($message);
echo mysqli_error($con);

function getAge($date)
{

    $dob = new DateTime($date);

    $now = new DateTime();

    $difference = $now->diff($dob);

    $age = $difference->y;

    return  $age;
}
