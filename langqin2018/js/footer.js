$(()=>{
    //加载页面
    $('footer').load("footer.html",footjs)
    //footer中圆点导航函数
    function footjs(){
        $('.circle2').on("click","span",e=>{
            var num = $(e.target).index()
            $(e.target).addClass("")
            var wid = $(".foot1>div").outerWidth();
            if(num==0){
              $(".foot1").css("left",0)
            }else if(num==1){
              $(".foot1").css("left",-wid)
            }else if(num==2){
              $(".foot1").css("left",-wid*2)
            }
          })

          $('.circle4').on("click","span",e=>{
            var num2 = $(e.target).index()
            console.log(num2)
            var wid2 = $(".foot5>ul>li").outerWidth();
            if(num2==0){
              $(".foot5>ul").css("left",0)
            }else if(num2==1){
              $(".foot5>ul").css("left",-wid2)
            }else if(num2==2){
              $(".foot5>ul").css("left",-wid2*2)
            }else if(num2==3){
              $(".foot5>ul").css("left",-wid2*3)
            }else if(num2==4){
              $(".foot5>ul").css("left",-wid2*4)
            }

          })

          $(".foot5").on('click','.wb a',function(e){
            e.preventDefault();
            location.href = "watch_list.html?f="+e.target.innerHTML
          })

          $(".foot3 i").mouseover(function(){
            $('.code2').show()
          })
          $(".foot3 i").mouseout(function(){
            $('.code2').hide()
          })

    }

})