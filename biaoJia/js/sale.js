$(".sale_nav>li").children().eq(0).css("color","#D93600");
$(".sale_nav>li").children().eq(1).css("display","block");


//自动生成推荐商品
$.ajax({
	type:"get",
	url:"json/hotsale.json",
	dataType:"json",
	success:function(data){
		var str = '';
		for(var j=0;j<data.length;j++){
			str+=`<li data-type=${data[j].goodsType} style="display:none">	
					<dl>
						<dt class="goods_img"><a href="#"><img src="${data[j].goodsSrc}"/></a></dt>
						<dd class="goods_name">
							<a href="#">${data[j].goodsName}</a>
						</dd>
						<dd class="goods_price">商城价:<em>${data[j].goodsPrice}</em></dd>
					</dl>
				</li>`;
		}
		//滑动效果
		$(".sale_panel").children().eq(0).html(str);
		var $li = $(".sale_panel").children().eq(0).find('li');
		for(let i=0;i<data.length;i++){
			$li.eq(i).css("display","none");
			if($li.eq(i).attr("data-type")=="recomm"){
				$li.eq(i).css("display","block");
			}
		}
		$(".sale_nav>li").hover(function(){
		$(".sale_nav>li").children().eq(0).css("color","inherit");
		$(".sale_nav>li").children().eq(1).css("display","none");
		$(this).addClass("selected").siblings().removeClass("selected");
		$(this).children().eq(0).css("color","#D93600");
		$(this).siblings().children("i").css("display","none")
		$(this).children().eq(1).css("display","block");

			for(let i=0;i<data.length;i++){

				$li.eq(i).css("display","none");
				if($(this).attr("id")==$li.eq(i).attr("data-type")){
					$li.eq(i).css("display","block");
				}
			}
				
			},function(){
				$(this).children().eq(0).css("color","inherit");
				
			}
		)

		
	}
});


