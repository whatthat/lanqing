$(()=>{
    var search = location.search;
    var query=decodeURI(search.split("=")[1]);
    
    $.ajax({
  url:"data/getevent.php",
  method:"get",
  data:{tid:query}
}).then(resData=>{
   var html = "";
   html = `<div class="event1">
   <h1>${resData.etitle}</h1>
</div>
<div class="event2">
   <div class="event21"><img src="${resData.pic1}" alt=""></div>
</div>
<div class="event3">
   <h2>${resData.etitle}</h2>
   <h3>${resData.edesc}</h3>
</div>
<div class="event4">
   <img src="${resData.pic2}" alt="">
</div>`
            document.querySelector("#event").innerHTML = html;
   })
   

})