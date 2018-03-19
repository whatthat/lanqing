$(()=>{
var data = JSON.parse(localStorage.getItem("chart")).chart
console.log(data)
var uid
		$.ajax({
     type:"get",
     url:"data/users/islogin.php",
     datatype:"json"
        }).then(text=>{
						if(text.ok==1){
                            uid=Number(text.uid)
							$.ajax({
								type:"get",
								url:"data/getAddress.php",
								datatype:"json",
								data:{uid}
							}).then(data=>{
									var {receiver,address,cellphone,postcode} = data
									$("#gift1").val(receiver) 
									$("#gift2").val(cellphone) 
									$("#address").val(address) 
									$("#postal").val(postcode) 
								 })
					
        }else{
            location.href='reg.html'
        }
    })
				
		getalldata();
    clickbtn();
    offoron();

		$('input.diamonds').click(function(){
			if($(this).prop('checked')){
				$('.payit').removeAttr("disabled");
			}else{
				$('.payit').attr('disabled',"true")
			}
        })
        
        $('.payit').click(function(){
            location.href="pay.html"
        })
})

function getalldata(){
		var data = JSON.parse(localStorage.getItem("chart")).chart
    var html = '' 
		for(d of data){
			html += `
								<div class="bing-shopcartcentent" >
                        <div >
                            <img src="${d.img}" alt="">
                        </div>
                        <div >
                            <div>
                                <div >
                                    <p>${d.name}</p>
                                    <span>${d.title}</span>
                                </div>
                                <div >
                                    <span>数量:</span>
                                    <span style="color: #003150;">${d.number}</span>
                                    <p></p>
                                    <p style="color: #003150;">¥${d.price}</p>
                                </div>
                                <div>
                                    <p >总计: <span class="mintotal" style="color: #003150;">¥${(parseFloat(d.price)*parseInt(d.number)).toFixed(2)}</span></p>
                                </div>
                            </div>
                        </div>
                </div>				
			`
		}
	$('.orderList').html(html)
    var pricetotal=$('.mintotal');
      for(var i=0,Alltotall=0;i<pricetotal.length;i++){
        Alltotall+=parseFloat(($(pricetotal[i]).html().slice(1)*1).toFixed(2));
      }
     $('#htmltotal').html('总计¥'+Alltotall).addClass('addh3');
     $('#xiaototal').html('¥'+Alltotall);
     $('#zongtotal').html('¥'+Alltotall);
}
function clickbtn(){
    $('.kuang-box').on('click','.kuang',function(){
        var haveclass =this.querySelector('p');
        var nub= $('.kuang');
       for(var i=0,name;i<nub.length;i++){
            name=nub[i].querySelector('p');
            $(name).removeClass('addblue');
       }
        $(haveclass).addClass('addblue');
          
    })
}
function offoron(){
    $('#agree').click(function(){
    $('#agree').hasClass('addblue')
    ? 
    $('#agree').removeClass('addblue')
    :
    $('#agree').addClass('addblue')
    })
}

