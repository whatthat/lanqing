<?php
header("Content-Type:application/json");
require_once("../init.php");
@$wname=$_REQUEST["wname"];
$sql = "select wid,mater,needle,cmater,price,title from lq_watch where wname = '$wname' limit 3";
$result = mysqli_query($conn,$sql);
//$output = [];
$output= mysqli_fetch_all($result,1);

for($i=0;$i<=2;$i++){
    $t = $output[$i]['title'];
    $sql2 = "select sm from lq_watch_pic where title = '$t'";
    $result2 = mysqli_query($conn,$sql2);
    $data = mysqli_fetch_all($result2,1);
    $output[$i]['sm'] = $data[0]['sm'];
}
echo json_encode($output);
//sm title mater needle cmater price 
