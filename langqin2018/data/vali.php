<?php 
    
    header("Content-Type:text/plain");//养成写header的习惯 
    require_once("init.php");
    @$uname = $_REQUEST["uname"];
    @$phone = $_REQUEST["phone"];
    @$upwd = $_REQUEST["lUpwd"];
		@$gender = $_REQUEST["usex"];

    $sql = "SELECT * FROM lq_user WHERE uname='$uname'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_row($result);
    if($row){
        echo "false";
    }else{
        $sql = "INSERT INTO lq_user(uname,phone,upwd,gender) VALUES('$uname','$phone','$upwd','$gender')";
        $result=mysqli_query($conn,$sql);
				$sql = "SELECT uid FROM lq_user WHERE uname='$uname'";
				$result = mysqli_query($conn,$sql);
				$row = mysqli_fetch_row($result);
				session_start();
				$_SESSION["uid"]=$row[0];
        echo "true";
    } 