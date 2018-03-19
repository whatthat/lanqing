<?php
header("Content-Type:application/json");
require_once("init.php");
@$tid =$_REQUEST["tid"];
@$output = [];
if($tid){
    $sql = "SELECT etitle,pic1,edesc,pic2 FROM lq_event WHERE tid=$tid";
    $result = mysqli_query($conn,$sql);
    $output = mysqli_fetch_all($result,1)[0];
}
    echo json_encode($output);