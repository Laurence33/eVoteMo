<?php
include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$id = $data['userId'];

$candidates = array();

$q = mysqli_query($con, "SELECT * FROM tblvoters WHERE UserId=$id");
if ($q) {
    $message['status'] = "Success";
} else {
    $message['status'] = "Error";
}
$account = mysqli_fetch_object($q);

$message['account'] = $account;
//reply
echo json_encode($message);
echo mysqli_error($con);
