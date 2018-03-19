(()=>{
	//表带尺寸头部下垃框显示隐藏
$("#dropdownMenu1").click(()=>{
			$("#dropdownul").toggleClass("hide");
		})
	//表带尺寸底部上垃框显示隐藏
		$("#dropup1").click(()=>{
			$("#dropupul").toggleClass("hide");
		})
	//表带尺寸头部下垃框选中的表带尺寸数值提交到上方的表带尺寸处
	$(".dropdown").on("click","#dropdownul>li>button>span",e=>{
		e.preventDefault();
		var vals=e.target.innerHTML//	$("e.target").html();
		console.log(vals);
		$("#dropdownMenu1").html(vals);
		$("#dropup1").html(vals);
	})
    //表带尺寸底部上垃框选中的表带尺寸数值提交到下方的表带尺寸处
	$(".dropup").on("click","#dropupul>li>button>span",e=>{
		e.preventDefault();
		var vals=e.target.innerHTML//	$("e.target").html();
		$("#dropup1").html(vals);
		$("#dropdownMenu1").html(vals);
	})
})();
	//	----------------------详情页内容动态加载-------------------------------
(()=>{	
	var wid=location.search.split("=")[1];//"?lid=1"
	var localData ={}
	var wname;
	$.ajax({
		type:"get",
		url:"data/products/getlqProductByLid.php",
		data:{wid},
		dataType:"json"
		}).then(output=>{
			var {lq_watch,lq_watch_pic}=output;
			var {wid,title,price,wglass,size,proof,mater,shape
				,needle,color,runtime,engine,tengine,etype,func,cmater,
				clasp,diamond,shell,band,carat,deep,detailsp1,detailsp2
				,seq_new_arrival,seq_top_sale}=lq_watch;
			wname = lq_watch.wname;
			var {title,sm,md,lg,dp1,dp2,dp3}=lq_watch_pic;
			localData = {
				id:wid,
				img:md,
				name:wname,
				number:1,
				price,
				title
			}
			console.log(localData)
			console.log(wname)
			document.querySelector("#detailsSet")
						.innerHTML=wname;
			document.querySelector("#detailsSetNum")
						.innerHTML=title;
			document.querySelector(".collection-title")
						.innerHTML=wname;
			document.querySelector(".base")
						.innerHTML=title;
			document.querySelector(".base")
						.innerHTML=title;
			document.querySelector("#detail-right-price")
						.innerHTML="¥ "+price;
			document.querySelector("#detailTopLeftImage")
						.src=md;
			document.querySelector("#changebigImg")
						.href=lg;
			document.querySelector("#product-detail-js")
			.innerHTML=`<ul class="product-detail-tabs">
										<li class="firstli"><a data-toggle="tab" href="#content1">表盘</a></li>
										<li class="secondli"><a data-toggle="tab" href="#content2">表盘和指针</a></li>
										<li class="thirdli"><a data-toggle="tab" href="#content3">机芯和功能</a></li>
										<li class="forthli"><a data-toggle="tab" href="#content4">表链</a></li>
									</ul>
									<div class="box1 active" id="content1">
										<dl class="box1-attr">
											<dt>
												表镜:  
											</dt><dd>${wglass}</dd>
											<dt>
												尺寸:    
											</dt>
											<dd>
												${size}
											</dd>
											<dt>
												防水性能:
											</dt>
											<dd>
												${proof}
											</dd>
											<dt>
												材质:  
											</dt>
											<dd>
												${mater}
											</dd>
											<dt>
												形状:    
											</dt>
											<dd>
												${shape}
											</dd>
										</dl>
									</div>
									<div class="box2 " id="content2">
										<dl class="box2-attr" >
											<dt>
												指针 
											</dt><dd>${needle}</dd>
											<dt>
												颜色:    
											</dt>
											<dd>
												${color}
											</dd>
											<dt>
												运行时间:  
											</dt>
											<dd>
												${runtime}
											</dd>
										</dl>
									</div>
									<div class="box3" id="content3">
										<dl class="box3-attr" >
											<dt>
												机芯:    
											</dt><dd>${engine}</dd>
											<dt>
												计时码表机芯:   
											</dt>
											<dd>
												${tengine}
											</dd>
											<dt>
												机芯类型:  
											</dt>
											<dd>
												 ${etype}
											</dd>
											<dt>
												功能:  
											</dt>
											<dd>
												${func}
											</dd>
										</dl>
									</div>
									<div class="box4" id="content4">
										<dl class="box4-attr" >
											<dt>
												材质:      
											</dt>
											<dd>${cmater}</dd>
											<dt>
												表扣:    
											</dt>
											<dd>
												${clasp}
											</dd>
										</dl>
									</div>`;
		
				var loc = location.href
				$('.share').html(`<span class="glyphicon glyphicon-share-alt btn" data-clipboard-text="${loc}"></span>
											<a href="" >分享</a>`)
				$('.xq4-bottom-content1')
					.html(`<a href="" class="glyphicon glyphicon-share-alt btn" data-clipboard-text="${loc}">分享</a>`)
				document.querySelector("#xqTwoLeftText")
						.innerHTML=detailsp1;
				document.querySelector("#xqThreeRight")
						.innerHTML=detailsp2;
				document.querySelector("#xq2RightImg")
						.src=dp1;
				document.querySelector("#xq3LeftImg")
						.src=dp2;
				document.querySelector("#xq4TopImg")
						.src=dp3;
			document.querySelector("#xqlikeContents")
			.innerHTML=`<div class="img-content1">
				<img src="${sm}" alt=""; class="img-responsive">
			</div>
			<div class="text-content1">
				<div>${wname}</div>
				<a href="">${title}</a>
				<span>¥${price}</span>
			</div>`;
			$.ajax({
				type:"get",
				url:"data/products/getProductByWname.php",
				data:{wname}
				}).then(output=>{
					console.log(wname)
					console.log(output[0].sm)
					var html = ""
					for(o of output){
						html +=`
						<div>	
							<div class="img-content">
							<img src="${o.sm}" alt="" width=100%>
							</div>
							<div class="text-content">
								<a href="product_details.html?wid=${o.wid}">${o.title}</a>
								<div>${o.mater}</div>
								<div>${o.needle}</div>
								<div>${o.cmater}</div>
								<p>${o.price}</p>
							</div>
						</div>							
						`
					}
					console.log(html)
					$("#xqmoreContent").html(html)
				})
			// 		html = `<div class="img-content1">
			// 	<img src="${output[0].sm}" alt=""; class="img-responsive">
			// </div>
			// <div class="text-content1">
			// 	<div>${output[0].wname}</div>
			// 	<a href="">${output[0].title}</a>
			// 	<span>¥${output[0].price}</span>
			// </div>`
			
		});
		$("#dropdownul>li>button").click(function(e){
			e.preventDefault()
		})
//更多推荐ajax加载




		//添加到购物车
		$(".join").click(function(e){
			e.preventDefault()
			var data = JSON.parse(localStorage.getItem("chart"))
			if(data==null){
				data = {}
				data.chart = []
			}
			localData.bandsize = $("#dropdownMenu1").html()>0?$("#dropdownMenu1").html():13.5
			data.chart.push(localData)
			localStorage.setItem("chart", JSON.stringify(data))
			alert("添加成功")
			
		})
		//下方添加到购物车功能
		$('.xqjoin').click(function(e){
			e.preventDefault()
				var data = JSON.parse(localStorage.getItem("chart"))
			if(data==null){
				data = {}
				data.chart = []
			}
			localData.bandsize = $("#dropdownMenu1").html()>0?$("#dropdownMenu1").html():13.5
			data.chart.push(localData)
			localStorage.setItem("chart", JSON.stringify(data))
			alert("添加成功")
			
		})
		//添加到
			$(".glyphicon-heart-empty").click(function(e){
			e.preventDefault()
			var data = JSON.parse(localStorage.getItem("chart"))
			if(data==null){
				data = {}
				data.chart = []
			}
			data.chart.push(
			{wid:location.search.split('=')[1],
			bandLength:$("#dropdownMenu1").html()>0?$("#dropdownMenu1").html():13.5}
			)

			localStorage.setItem("chart", JSON.stringify(data))
			alert("添加成功")
			
		})
		


		//点击分享
		$('.share').click(function(){
			alert("连接已复制到剪贴板")
		})
		$('.xq4-bottom-content1').click(()=>{alert("连接已复制到剪贴板")})
    //点击加入比较列表
    $(".compare").click(function(){
			var storage = localStorage.getItem( 'compare' );
				storage = storage ? JSON.parse( storage ) : [];
			var wid = Number(location.search.split('=')[1])
            if(storage.length<2){
								if(storage[0] == wid){
									alert("已经添加过了")
									return
								}
                storage.push(wid);
                localStorage.setItem( 'compare', JSON.stringify( storage ) );
            }else{
                alert("最多只能比较两款");
                return;
            }
            //console.log(localStorage['compare']);
    });
		//------------------------渐入渐出功能-----------------------------------
//		$(function(){
//		$(".xq-details").animate({opacity: 0; transform: matrix(1, 0, 0, 1, 0, 150)},1000,function(){
//		$(this).css({opacity: 1})
//		})
//		})
	$(".buy").click(function(e){
		e.preventDefault();
		$.ajax({
     type:"get",
     url:"data/users/islogin.php",
     datatype:"json"
        }).then(text=>{
           if(text.ok==1){
                 location.href="shopcar.html"
            }else{
                 location.href="reg.html"
            }
				})
	})
	
})();
