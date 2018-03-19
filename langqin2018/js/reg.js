$(()=>{
	$.ajax({
		type:"get",
		url:"data/users/islogin.php",
		datatype:"json"
				}).then(text=>{
						if(text.ok==1){
							if(confirm("您已登录，是否需要注销")){
								$.ajax({
									type:"get",
									url:"data/users/logout.php",
									datatype:"json"
								}).then(()=>{
									alert("已注销")
									location.href="index.html"
								})
							}else{
								location.href="index.html"
							}
						}
				})


var form1 = document.forms[0]
		var txtName=form1.uname
		var txtPhone=form1.phone
		var txtPwd=form1.lUpwd
		var txtPwd2=form1.lUpwd2

		txtName.onblur=function(){
			vali(this,/^[a-zA-Z0-9_\u4e0-\u9fa5]{2,}$/);
		}
		txtPwd.onblur=function(){
				vali(this,/[a-zA-Z0-9_\.]{6,16}/);
		}
		txtPhone.onblur=function(){
				vali(this,/^[0-9]{11}$/);
		}	
		txtPwd2.onblur=valipwd;
		
		function valipwd(){
			var div=txtPwd2.nextElementSibling;
			div.className=""
			if(txtPwd.value!==txtPwd2.value||txtPwd2.value==""){
				div.className="vali-info"
				return false
			}else{
				div.className="hiding"
				return true
			}
		}
		//通用验证方法
		function vali(txt,reg){
			var div=txt.nextElementSibling;
			div.className=""
			if(reg.test(txt.value)){
				div.className="hiding"
				return true
			}else{
				div.className="vali-info";
				return false
			}
		}

		//验证码验证
    txtCode.onkeyup=function(){
      if(txtCode.value !=""){
        $.ajax({
          type:"get",
          url:"data/chkCode.php",
          data:"code="+txtCode.value
        }).then(text=>{
          if(text=="true"){
          msg.innerHTML="验证码正确";
          msg.className="ok";
        }else{
          msg.innerHTML="验证码错误";
          msg.className="err";
        }
				})
      }else{
					msg.innerHTML="";
          msg.className="";
      }
      }
        imgCode.onclick=function(){
        imgCode.src="data/getCode.php";
      }
		
		//验证码确认通过
		function valimsg(){
			if(msg.className="ok") return true;
			else return false;
		}

		//隐私政策验证
		$(".L-checkbox").click(function () {
      if ($(this).is(':checked')) {
          $("#btn").attr("disabled",false)
			}else{
					$("#btn").attr("disabled",true)
			}
		})
		
		//提交
		$("#btn").click(()=>{
    if(vali(txtName,/^[a-zA-Z0-9_\u4e0-\u9fa5]{2,}$/)
        &&vali(txtPwd,/[a-zA-Z0-9_\.]{6,16}/)
        &&vali(txtPhone,/^[0-9]{11}$/)&&valipwd()&&valimsg()){
             $.ajax({
							type:"post",
							url:"data/vali.php",
							data:$(form1).serialize()
          }).then(text=>{
              if(text=="true"){
								alert("注册成功")
								location.href = "index.html"
							}
              else alert("账号已存在")
          })
    }else{
        alert("不符合要求")
				form1.reset()
    } 
})

var form2 = document.forms[1]
var txtPhone2=form2.phone2
var txtPwd3=form2.upwd2

$("#btn2").click(()=>{
		if(vali(txtPhone2,/^[0-9]{11}$/)&&vali(txtPwd3,/[a-zA-Z0-9_\.]{6,16}/)){
			$.ajax({
							type:"post",
							url:"data/users/login.php",
							data:$(form2).serialize()
          }).then(text=>{
              if(text=="true"){
								alert("登录成功")
								location.href = "index.html"
							}
              else alert("账号或密码错误")
          })
		}else{
        alert("登录信息不符合要求")
				form2.reset();
    } 
})
})