//自动生成每一个楼层
$.ajax({
	type:"get",
	url:"json/floor.json",
	dataType:"json",
	success:function(data){
		var str1 = '';
		for(let i=0;i<data.length;i++){
			str1+=`<div class="floor_1f">
						<div class="floor_title">
							<h1><b>${data[i].Fnum}F</b>${data[i].Fname}</h1>
						</div>
						<div class="floor_box">
							<div class="box_left"><a href="#"><img src="${data[i].Fsrc}"/></a></div>
							<div class="box_right">
								<ul id="floor_${data[i].Fnum}">
								</ul>
							</div>
						</div>
					</div>`;
		}
		$("footer").before(str1);
		//自动生成楼层中的商品
		for(let k=1;k<8;k++){
			$.ajax({
				url:"json/item"+k+".json",
				type:"get",
				dataType:"json",
				success:function(data2){
					var str = '';
					for(var j=0;j<data2.length;j++){
						str+=`<li><a href="#">
									<div class="item_pic"><img src="${data2[j].Isrc}"/></div>
									<div class="item_intro">
									<div class="item_name">${data2[j].Iname}</div>
									<div class="item_price">${data2[j].Iprice}</div>
									</div>
								</a></li>`
					}
					$("#floor_"+k).html(str);
				}
			})
		}
				
	}
});
