
	var oUl = $(".category_menu");
	var oLi = oUl.find("li");
	oLi.hover(function(){
		$(this).css("z-index","99999");
		$(this).children().first().addClass("hover");
		$(this).find(".subcategory").css("display","block");
	},function(){
		$(this).css("z-index","1");
		$(this).children().first().removeClass("hover");
		$(this).find(".subcategory").css("display","none");
	})

