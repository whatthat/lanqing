<?php
header("Content-Type:application/json");
require_once("init.php");
@$aid = $_REQUEST["aid"];
@$output = [];
if($aid){
    $sql = "SELECT aname,desc1,pic1,desc2,pic_lg FROM lq_amba WHERE aid=$aid";
    $result = mysqli_query($conn,$sql);
    $output = mysqli_fetch_all($result,1)[0];
}
    echo json_encode($output);