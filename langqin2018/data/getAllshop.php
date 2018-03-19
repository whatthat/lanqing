<?php 
    header("Content-Type:application/json");
    require_once("init.php");
    $title=$_REQUEST["title"];
    @$number=$_REQUEST["number"];
    if($number===null || $number===""){
        $number=1;
    };
    $bandsize=$_REQUEST["bandsize"];
	$sql="SELECT * FROM lq_watch where title='$title'";
	$result=mysqli_query($conn,$sql);
    $lq_watch=mysqli_fetch_all($result,1)[0];
    $content["lq_watch"]=$lq_watch;
	$sql1="SELECT * FROM lq_watch_pic  where title='$title'";
	$result1=mysqli_query($conn,$sql1);
	$output=mysqli_fetch_all($result1,1)[0];
    $content["lq_watch_pic"]=$output;
    $content["bandsize"]=$bandsize;
    $content["number"]=$number;
	echo json_encode($content);
?>