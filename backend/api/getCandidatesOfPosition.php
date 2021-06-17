<?php
include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$position = ucwords(strval($data['position']));

$candidates = array();

$q = mysqli_query($con, "SELECT * FROM tblcandidates");

while ($row = mysqli_fetch_object($q)) {
    if ($position == $row->Position) $candidates[] = $row;
}
//reply
echo json_encode($candidates);
echo mysqli_error($con);
