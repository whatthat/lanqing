<?php
header("Content-Type:application/json");
require_once("../init.php");
@$wid=$_REQUEST["wid"];
$output=[
//	lq_watch=>{wid,title,wname,price,wglass,size,proof...}
//	lq_watch_pic=>{title,sm,md,lg,detailsp1,detailsp2,detailsp3...}
];
	$sql="SELECT * FROM lq_watch where wid='$wid'";
	$result=mysqli_query($conn,$sql);
	$lq_watch=mysqli_fetch_all($result,1)[0];
	$output["lq_watch"]=$lq_watch;
	$title=$lq_watch["title"];
	$sql1="SELECT * FROM lq_watch_pic where title='$title'";
	$result1=mysqli_query($conn,$sql1);
	$output["lq_watch_pic"]=mysqli_fetch_all($result1,1)[0];
	echo json_encode($output);