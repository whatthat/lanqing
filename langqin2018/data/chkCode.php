<?php //验证用户输入的验证码是否正确
@$code=$_REQUEST["code"];//尝试请求用户发来的code
session_start();
if(strtoLower($code)==strtoLower($_SESSION["code"])){
	echo "true";
}else{
	echo "false";
}