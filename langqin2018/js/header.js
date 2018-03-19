//在当前页面加载header.html
$(()=>{
    $("header").load("header.html",closewb)
		
		$.ajax({
			type:"get",
			url:"data/users/islogin.php",
			datatype:"json"
          }).then(text=>{
              if(text.ok==1){
								$('.islogin').html(text.uname)
								
							}
          })

	var ss = $(document).scrollTop();
	$(window).scroll(()=>{
		var s = $(document).scrollTop();
        if(s >110){
			$('header').addClass('disappear');
			if(s > ss){
				$('header').removeClass('appear');
			}else{
				$('header').addClass('appear');
			}
			ss = s;
		}
    });
//登录状态

//浮动框关闭按钮
function closewb(){
		$("header li.floatItem1").mouseover(function(e){	
			$(e.target).siblings().children().css("border-bottom","0")
			$(".floatItem2").removeClass("show")
			$(".wbsj").addClass("show");
			$(e.target).children().css("border-bottom","1px solid #003150")
	})
		$("header li.floatItem2").mouseover(function(e){
			$(e.target).siblings().children().css("border-bottom","0")
			$(".floatItem2").removeClass("show")
			$(".world").addClass("show");
			$(e.target).children().css("border-bottom","1px solid #003150")
	})
		$("header li.floatItem3").mouseover(function(e){
			$(e.target).siblings().children().css("border-bottom","0")
			$(".floatItem2").removeClass("show")
			$(".brand").addClass("show");
			$(e.target).children().css("border-bottom","1px solid #003150")
	})

	$('.floatClose').click(function(){
		$(".floatItem2").removeClass("show")
		$("header li a").css("border-bottom","0")
	})

	$(".fa-navicon").click(function(){
		$(".header2 ul").toggle();
	})
	
	$(".wbsjul").on('click','a',function(e){
	e.preventDefault();
	location.href = "watch_list.html?f="+e.target.innerHTML
})
}



})


