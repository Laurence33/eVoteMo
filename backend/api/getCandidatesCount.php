<?php
include "config.php";

$data = array(
    'Mayor' => 0,
    'Vice Mayor' => 0,
    'Sangguniang Bayan' => 0,
    'Barangay Captain' => 0,
    'Barangay Kagawad' => 0,
    'Barangay SK Chairman' => 0,
    'Barangay SK Kagawad' => 0
);

$q = mysqli_query($con, "SELECT * FROM tblcandidates;");

while ($row = mysqli_fetch_object($q)) {
    if ($row->Position == 'Mayor') {
        $data['Mayor'] += 1;
    } elseif ($row->Position == 'Vice Mayor') {
        $data['Vice Mayor'] += 1;
    } elseif ($row->Position == 'Sangguniang Bayan') {
        $data['Sangguniang Bayan'] += 1;
    } elseif ($row->Position == 'Barangay Captain') {
        $data['Barangay Captain'] += 1;
    } elseif ($row->Position == 'Barangay Kagawad') {
        $data['Barangay Kagawad'] += 1;
    } elseif ($row->Position == 'Barangay SK Chairman') {
        $data['Barangay SK Chairman'] += 1;
    } elseif ($row->Position == 'Barangay SK Kagawad') {
        $data['Barangay SK Kagawad'] += 1;
    }
}
//reply
echo json_encode($data);
echo mysqli_error($con);
