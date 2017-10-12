//自动生成楼层中的商品
var a = $("#floor_1")
console.log(a)
$.ajax({
	url:"json/item.json",
	type:"get",
	dataType:"json",
	success:function(data){
		var str = '';
		for(var i=0;i<data.length;i++){
			str+=`<li><a href="#">
						<div class="item_pic"><img src="${data[i].Isrc}"/></div>
						<div class="item_intro">
						<div class="item_name">${data[i].Iname}</div>
						<div class="item_price">${data[i].Iprice}</div>
						</div>
					</a></li>`
		}
		a.children().append(str);
	}
})
