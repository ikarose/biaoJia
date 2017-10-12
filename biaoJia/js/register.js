var a = Math.random();
$("#codeimage").attr('src','http://biao-jia.com/mall/index.php?act=seccode&op=makecode&nchash=f5cb96c6&t=' + a);
//注册表单提示
$('.tip').poshytip({
    className: 'tip-yellowsimple',
    showOn: 'focus',
    alignTo: 'target',
    alignX: 'center',
    alignY: 'top',
    offsetX: 0,
    offsetY: 5,
    allowTipHover: false
});

//切换验证码图片
$("#change_code").click(function(){
	var b = Math.random();
	$("#codeimage").attr('src','http://biao-jia.com/mall/index.php?act=seccode&op=makecode&nchash=f5cb96c6&t=' + a);
	console.log(b)
})


//注册表单验证
$(function(){
        jQuery.validator.addMethod("lettersonly", function(value, element) {
            return this.optional(element) || /^[^:%,'\*\"\s\<\>\&]+$/i.test(value);
        }, "Letters only please"); 
        jQuery.validator.addMethod("lettersmin", function(value, element) {
            return this.optional(element) || ($.trim(value.replace(/[^\u0000-\u00ff]/g,"aa")).length>=3);
        }, "Letters min please"); 
        jQuery.validator.addMethod("lettersmax", function(value, element) {
            return this.optional(element) || ($.trim(value.replace(/[^\u0000-\u00ff]/g,"aa")).length<=15);
        }, "Letters max please");
    $("#register_form").validate({
        errorPlacement: function(error, element){
            var error_td = element.parent('.serror');
            error_td.find('label').hide();
            error_td.append(error);
        },
        submitHandler:function(form){
            ajaxpost('register_form', '', '', 'onerror') 
        },
        rules : {
            user_name : {
                required : true,
                lettersmin : true,
                lettersmax : true,
                lettersonly : true,
                remote   : {
                    url :'index.php?act=login&op=check_member&column=ok',
                    type:'get',
                    data:{
                        user_name : function(){
                            return $('#user_name').val();
                        }
                    }
                }
            },
            password : {
                required : true,
                minlength: 6,
                maxlength: 20
            },
            password_confirm : {
                required : true,
                minlength: 6,
                maxlength: 20,
                equalTo  : "#password"
            },
            email : {
                required : true,
                email    : true,
                remote   : {
                    url : 'index.php?act=login&op=check_email',
                    type: 'get',
                    data:{
                        email : function(){
                            return $('#email').val();
                        }
                    }
                }
            },
            captcha : {
                required : true,
                minlength: 4,
                remote   : {
                    url : 'index.php?act=seccode&op=check&nchash=f5cb96c6',
                    type: 'get',
                    data:{
                        captcha : function(){
                            return $('#captcha').val();
                        }
                    }
                }
            },
            agree : {
                required : true
            }
        },
        messages : {
            user_name : {
                required : '用户名不能为空',
                lettersmin : '用户名必须在3-15个字符之间',
                lettersmax : '用户名必须在3-15个字符之间',
                lettersonly: '用户名不能包含敏感字符',
                remote   : '该用户名已经存在'
            },
            password  : {
                required : '密码不能为空',
                minlength: '密码长度应在6-20个字符之间',
                maxlength: '密码长度应在6-20个字符之间'
            },
            password_confirm : {
                required : '请再次输入您的密码',
                minlength: '密码长度应在6-20个字符之间',
                maxlength: '密码长度应在6-20个字符之间',
                equalTo  : '两次输入的密码不一致'
            },
            email : {
                required : '电子邮箱不能为空',
                email    : '这不是一个有效的电子邮箱',
                remote   : '该电子邮箱已经存在'
            },
                        captcha : {
                required : '请输入验证码',
                minlength: '验证码不正确',
                remote   : '验证码不正确'
            },
                        agree : {
                required : '请阅读并同意该协议'
            }
        }
    });
});
