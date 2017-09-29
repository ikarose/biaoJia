
//菜单箭头动画和下拉菜单
var oLi = $(".quick_menu").children().children();
oLi.mouseenter(function(){
	$(this).children().eq(1).css({transform:"rotate("+180+"deg)",transformOrigin:"50% 30%"});
	$(this).children().eq(2).css("display","block");
})
oLi.mouseleave(function(){
	$(this).children().eq(1).css({transform:"rotate("+0+"deg)",transformOrigin:"50% 30%"});
	$(this).children().eq(2).css("display","none");
})

//搜索框的下拉动画
var cInner = $("#cate_inner");
var oCate = $(".cate");
var cUl = $(".cate_ul");
oCate.on("click","#cate_inner",function(){
	if(cUl.css("display")=="none"){
		cUl.css("display","block");
	}else{
		cUl.css("display","none");
	}
})
oCate.on("click",".cate_slide",function(){
	if(cUl.css("display")=="none"){
		cUl.css("display","block");
	}else{
		cUl.css("display","none");
	}
})
oCate.on("mouseover","a",function(){
	var a = $(this).text();
	cInner.children().eq(0).text(a?a:cInner.children().eq(0).text());
})


