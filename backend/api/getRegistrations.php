<?php
include "config.php";

$data = array();

$q = mysqli_query($con, "SELECT * FROM tblregistrations;");

while ($row = mysqli_fetch_object($q)) {
    $data[] = $row;
}
//reply
echo json_encode($data);
echo mysqli_error($con);
