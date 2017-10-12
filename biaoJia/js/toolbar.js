var $pl = $(".please_login");
$pl.hover(function(){
	$pl.css("background","#E4393C");
},function(){
	$pl.css("background","#333333");
})

var $tl = $(".tools"); 
var $li = $tl.find("li");
$li.hover(function(){
	$(this).addClass("active");
},function(){
	$(this).removeClass("active");
})

//回到顶部
var $bk = $(".back_top");
$bk.click(function(){
	$("body,html").animate({
		scrollTop:0
	},300);
	return false;
})