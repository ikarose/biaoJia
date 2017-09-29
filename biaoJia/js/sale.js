$(".sale_nav>li").children().eq(0).css("color","#D93600");
$(".sale_nav>li").children().eq(1).css("display","block");

$(".sale_nav>li").hover(function(){
		$(".sale_nav>li").children().eq(0).css("color","inherit");
		$(".sale_nav>li").children().eq(1).css("display","none");
		$(this).addClass("selected").siblings().removeClass("selected");
		$(this).children().eq(0).css("color","#D93600");
		$(this).siblings().children("i").css("display","none")
		$(this).children().eq(1).css("display","block");
	},function(){
		$(this).children().eq(0).css("color","inherit")
	}
)
