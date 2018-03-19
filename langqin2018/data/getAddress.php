<?php
//data/users/islogin.php
header("Content-Type:application/json");
require_once("init.php");
@$uid = $_REQUEST['uid'];
$sql = "select receiver,province,city,county,address,cellphone,postcode from lq_receiver_address where uid = $uid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
echo json_encode(["receiver"=>$row[0],"province"=>$row[1],"city"=>$row[2],"county"=>$row[3],"address"=>$row[4],"cellphone"=>$row[5],"postcode"=>$row[6]]);