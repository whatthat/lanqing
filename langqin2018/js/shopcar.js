$(()=>{
var data = JSON.parse(localStorage.getItem("chart")).chart

loadinfo()


//加载页面
function loadinfo(){
	isnone()
	var data = JSON.parse(localStorage.getItem("chart")).chart
	var html = ""
	data.forEach(function(d,index){
		html += `
			<div class="container-fluid" id="tianjialiebiao">
				<div class="row shopcartAfter">
					<!-- 购物车列表样式 -->
					<div class="bing-shopcartcentent">
					<!-- 购物车并排内容 -->
					<div>
						<img src="img/md/${d.title}md.png" alt="">
					</div>
					<div>
					<div class="bing-listcontent">
						<!-- 最里面的自适应布局开始   -->
						<div class="bing-content">
							<div class="content-title">
								<p>${d.name}</p>
								<span>${d.title}</span>
							</div>
							<div class="content-select">
								<div class="selectbox">
									<p>数量</p>
									<select  class="shopcarshow-content-left-select" value="hellow" style="color:#003150;">
										<option value="1" 1="" selected="">1</option>
										<option value="2" 2="">2</option>
										<option value="3" 3="">3</option>
										<option value="4" 4="">4</option>
										<option value="5" 5="">5</option>
										<option value="6" 6="">6</option>
										<option value="7" 7="">7</option>
										<option value="8" 8="">8</option>
									</select>
								</div>
								<div class="content-watchSize">
									<div class="wasize">
										<p>表带尺寸(厘米)</p>
										<p class="wasize-numb">${d.bandsize}</p>
									</div>
								</div>
							</div>
						</div>
						<div class="content-numb">
							<div class="price">
								<p>价格</p>
								<p class="price-numb">¥${d.price}</p>
							</div>
							<div class="count">
								<p>小计</p>
								<p class="count-numb">¥${d.price}</p>
							</div>
						</div>
							<!-- 最里面的自适应布局结束  -->
					</div>
					<!-- 表格移除按钮 -->
					<div class="sijin">
						<p class="xdelete clickyichu" data-num=${index}>移除</p>
					</div>
				</div>	
			</div>
			<div class="yichu2">
				<p class="clickyichu">X 移除</p>
			</div>
		</div>	
		`
	})
	$('.list').html(html)
	countPrice()
}
//计算
$('.shopcarshow-content-left-select').click(countPrice)
function countPrice(){
	var watchnum = $('.shopcarshow-content-left-select')
	var watchprice = $('.price-numb')
	var countnum = $('.count-numb')
	var sum=0;
	for(var i=0;i<countnum.length;i++){
		countnum[i].innerHTML ='¥'+Number(watchprice[i].innerHTML.split('¥')[1])*Number(watchnum[i].value)
		sum+=Number(countnum[i].innerHTML.split('¥')[1])
		}
	$('#orderxiao').html('¥'+sum)
	$('#orderzong').html('¥'+sum)
}

//移除事件
	$('.xdelete').click(function(e){
//		console.log(e.target)
			var data = JSON.parse(localStorage.getItem("chart")).chart
			var num = $(e.target).data('num')
			data.splice(num,1)
			var output = {}
			output.chart=data
			localStorage.setItem('chart',JSON.stringify(output))
			loadinfo();
		})

// 判断是否登录
function islogin(){
	$.ajax({
     type:"get",
     url:"data/users/islogin.php",
     datatype:"json"
        }).then(text=>{
           if(text.ok==0){
              location.href="reg.html"
            }
				})
}

function isnone(){
  var data = JSON.parse(localStorage.getItem("chart")).chart
		if(data==null||data.length==0){
			unexist()
		}else{
		  isexist()
		}	  
}
// 没有数据
function unexist(){
   $('.valve').css('display','none');
   $('.nothing').css('display','block');
}
// 有数据
function isexist(){
    $('.valve').css('display','block');
    $('.nothing').css('display','none');
}
//结算连接
$('.settle-pay').click(function(){
		var data = JSON.parse(localStorage.getItem("chart")).chart
		var watchnum = $('.shopcarshow-content-left-select')
		for(i=0;i<watchnum.length;i++){
			data[i].number = Number(watchnum[i].value)
		}
		var output = {}
		output.chart=data
		localStorage.setItem('chart',JSON.stringify(output))
		location.href='checkout.html'
})
$('.headpay').click(function(){
		var data = JSON.parse(localStorage.getItem("chart")).chart
		var watchnum = $('.shopcarshow-content-left-select')
		for(i=0;i<watchnum.length;i++){
			data[i].number = Number(watchnum[i].value)
		}
		var output = {}
		output.chart=data
		localStorage.setItem('chart',JSON.stringify(output))
		location.href='checkout.html'
})

})