<?php
//data/users/login.php
require_once("../init.php");
@$phone=$_REQUEST["phone2"];
@$upwd=$_REQUEST["upwd2"];
if($phone&&$upwd){
	$sql="select uid from lq_user where phone='$phone' and binary upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row){
		session_start();
		$_SESSION["uid"]=$row[0];
		echo "true";
	}else{
		echo "false";
	}
}else{
	echo "false";
}