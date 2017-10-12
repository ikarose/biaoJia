var a = Math.random();
$("#codeimage").attr('src','http://biao-jia.com/mall/index.php?act=seccode&op=makecode&nchash=f5cb96c6&t=' + a);

//切换验证码图片
$("#change_code").click(function(){
	var b = Math.random();
	$("#codeimage").attr('src','http://biao-jia.com/mall/index.php?act=seccode&op=makecode&nchash=f5cb96c6&t=' + a);
	console.log(b)
})
