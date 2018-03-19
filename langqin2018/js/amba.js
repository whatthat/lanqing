$(()=>{
		var search = location.search;
		var query=decodeURI(search.split("=")[1]);
		
		$.ajax({
      url:"data/getamba.php",
      method:"get",
      data:{aid:query}
    }).then(resData=>{
       var html = "";
       html = `
				<div class="amba1"><h1>${resData.aname}</h1></div>
				<div class="amba2">
					<div class="amba21">
						<img src="${resData.pic1}" alt="">
					</div>
					<div class="amba22">
						<h2>${resData.desc1}</h2>
						<h3>${resData.desc2}</h3>
					</div>
				</div>
				<div class="amba3">
				<img src="${resData.pic_lg}" alt="">	 
						 </div>`
				document.querySelector("#amba").innerHTML = html;
       })
       
    
})