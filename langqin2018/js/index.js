window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

$(()=>{
    //首页上部轮播图   
    var LIWIDTH=$(".banner").width(),timer=null,moved=0,duration=500,wait=3000,sum=0;//moved记录左移次数，小圆点下标
    var $ul = $(".bannerImg");
    
    function move3(){
      $ul.animate({
            left:-moved*LIWIDTH
        },duration,function(){
        if(moved>=4||$ul.css("left")>=$(".banner").width()){
            moved=0
            $ul.css("left",0);
            }
        })  
    }
    //利用requestAnimFrame制作轮播

    //运动函数
    function move(){
        timer = requestAnimFrame(move)        
        sum++;
        if(sum%130==0){
        moved++;  
        move3()
        sum=0;
      }
    }
    //执行一次
    move();

    $(".banner").hover(
       ()=>{
           window.cancelAnimationFrame(timer);
        },
        ()=>{
        move()
      }
    )

    $("#next").click(()=>{
      if(!$ul.is(":animated")){
        moved++;
        move3();
      }    
    })

    $("#previous").click(()=>{
      if(!$ul.is(":animated")){
        if(moved==0){
          $ul.css("left",-LIWIDTH*4)
          moved=4;
        }
        moved--;
        move3();
      }    
    })

    //小广告轮播图
    var adwidth = $(".ad").width(),timer2=null,moved2=0,duration2=500,wait2=3000,sum2=0;
    var $ul2 = $(".ul2")
    function move4(){
    $ul2.animate({
      left:-moved2*adwidth
      },duration2,function(){
      if(moved2>=3){
         moved2=0
         $ul2.css("left",0);
         }     
    })}

    //下方广告轮播图
    function move2(){
       timer2 = requestAnimationFrame(move2)
       sum2++;
       if(sum2%130==0){
         moved2++;
         move4(); 
         sum=0;
        }     
        if(moved2==0||moved2==3){
          $(".adWatch").html(`<a href="product_details.html?wid=11"><img src="img/l2.811.4.53.0sm.jpg" alt=""></a>
            <br>
            <h4>浪琴表名匠系列</h4>
            <h4>l2.811.4.53.0</h4>
            <h3><a href="product_details.html?wid=11">了解详情</a></h3>`)
          $(".indicators li:nth-child(1)").addClass("hover").siblings().removeClass("hover");
          $(".adWatch").click(function(){
            location.href="product_details.html?wid=11"
          })
        } else if(moved2==1){
          $(".adWatch").html(`<a href="product_details.html?wid=23"><img src="img/L4.309.0.87.6sm.jpg" alt=""></a>
            <br>
            <h4>博雅系列</h4>
            <h4>L4.309.0.87.6</h4>
            <h3><a href="product_details.html?wid=23">了解详情</a></h3>`)
          $(".indicators li:nth-child(2)").addClass("hover").siblings().removeClass("hover");
          $(".adWatch").click(function(){
            location.href="product_details.html?wid=23"
          })
        }else if(moved2==2){
          $(".adWatch").html(`<a href="product_details.html?wid=10"><img src="img/L2.820.4.11.6sm.jpg" alt=""></a>
            <br>
            <h4>浪琴表康铂系列</h4>
            <h4>L2.820.4.11.6</h4>
            <h3><a href="product_details.html?wid=10">了解详情</a></h3>`)
          $(".indicators li:nth-child(3)").addClass("hover").siblings().removeClass("hover");
          $(".adWatch img").click(function(){
            location.href="product_details.html?wid=10"
          })
        
        }
    }
    
    //执行运动函数
    move2()

    $(".ad").hover(
      ()=>{
           window.cancelAnimationFrame(timer2);
        },
        ()=>{
        move2()
      }
    )

    $("#next2").click(()=>{
      if(!$ul2.is(":animated")){
        moved2++;
        move4();
      }    
    })

    $("#previous2").click(()=>{
      if(!$ul2.is(":animated")){
        if(moved2==0){
          $ul2.css("left",-adwidth*2)
          moved2=2;
        }
        moved2--;
        move4();
      }    
    })

  //md中的推荐手表的圆点导航
  $('.circle1').on("click","span",e=>{
    var num = $(e.target).index()
    $(e.target).addClass("hovercircle");
    var wid = $(".recomm1").outerWidth();
    if(num==0){
      $(".hotWatch").css("left",0)
    }else if(num==1){
      $(".hotWatch").css("left",-wid)
    }else if(num==2){
      $(".hotWatch").css("left",-wid*2)
    }
  })

  //新闻连接

})