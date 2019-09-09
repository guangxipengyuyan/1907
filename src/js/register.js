$(function(){
    function ranNum() {
        var str = '0123456789zxcvbnmasdfghjklpoiuytrewqZXCVBNMLKJHGFDSAQWERTYUIOP';
        var num1 = parseInt(Math.random() * str.length);
        var num2 = parseInt(Math.random() * str.length);
        var num3 = parseInt(Math.random() * str.length);
        var num4 = parseInt(Math.random() * str.length);
        var res = str[num1] + str[num2] + str[num3] + str[num4];
        //要返回值
        return res;
    }

    $('.yanzhengma').html(ranNum());
    $('.yanzhengma').click(function(){
        $('.yanzhengma').html(ranNum());
    })

    $('.register_box input').focus(function(){
        $(this).css({'box-shadow':'0px 0px 2px #4491ff','border':'1px solid #4491ff'})
        $(this).next().filter('.text').show();
        if($(this).val()){
            $(this).next().filter('.text').hide();
        }
    })
    $('.register_box input').blur(function(){
        $(this).css({'box-shadow':'none','border':'1px solid #CFCFCF'})
        $(this).next().filter('.text').hide();
    })


    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var ok4 = false;

    $('.shouji').blur(function(){
        var num = $(this).val();
        if(num){
            if(zhengze.tel(num)){
                $('.shouji_box .msg').hide();
                $('.shouji_box .text').hide();
                $.ajax({
                    type : 'post',
                    async : true,
                    data : 'phone='+num,
                    url : '../api/shouji.php',
                    success:function(str){
                        var arr = JSON.parse(str) * 1;
                        console.log(arr)
                        if(arr>0){
                            $('.shouji_box .msg2').show();
                            $('.shouji_box .msg').hide();
                            $('.shouji_box .shouji_text').hide();
                        }else{
                            $('.shouji_box .msg2').hide();
                            $('.shouji_box .right').show();
                            $('.shouji_box .msg').hide();
                            $('.shouji_box .shouji_text').hide();
                            ok1 = true;
                        }
                    }
                });
            }else{
                $('.shouji_box .msg').show();
                $('.shouji_box .shouji_text').hide();
            }
        }else{
            $('.shouji_box .msg2').hide();
            $('.shouji_box .msg').hide();
        }
    });


    $('.yanzheng').blur(function(){
        var a = $('.yanzhengma').html().toLowerCase();
        var b = $('.yanzheng').val().toLowerCase();
        // console.log(a,b)
        if(b){
            if(a == b){
                $('.yanzheng_box .right').show();
                $('.yanzheng_box .msg').hide();
                ok2 = true;
            }else{
                $('.yanzheng_box .right').hide();
                $('.yanzheng_box .msg').show();
            }
        }else{
            $('.yanzheng_box .right').hide();
            $('.yanzheng_box .msg').hide();
        }
    });

    $('.mima1').blur(function(){
        var psw1 = $('.mima1').val();
        console.log(psw1)
        if(psw1){
            if(zhengze.psweasy(psw1)){
                $('.mima1_box .right').show();
                $('.mima1_box .msg').hide();
                ok3 = true;
            }else{
                $('.mima1_box .right').hide();
                $('.mima1_box .msg').show();
            }
        }else{
            $('.mima1_box .right').hide();
            $('.mima1_box .msg').hide();
        }
    });

    $('.mima2').on('blur',function(){
        var psw1 = $('.mima1').val();
        var psw2 = $('.mima2').val();
        if(psw2){
            if(psw1 == psw2){
                $('.mima2_box .right').show();
                $('.mima2_box .msg').hide();
                ok4 = true;
            }else{
                $('.mima2_box .right').hide();
                $('.mima2_box .msg').show();
            }
        }else{
            $('.mima2_box .right').hide();
            $('.mima2_box .msg').hide();
        }
    });

    $('.zhuce_btn').on('click',function(){
        var a = $('.shouji').val();
        var b = $('.mima2').val();
        if(ok1 && ok2 && ok3 && ok4){
            $.ajax({
                type: 'post',
                data: 'phone='+a+'&psw='+b,
                async: true,
                url: '../api/zhuce.php',
                success:function(str){
                    var att = JSON.parse(str);
                    // console.log(att)
                    if(att == 1){
                        $('.yanzheng').val('');
                        $('.mima1').val('');
                        $('.mima2').val('');
                        alert('注册成功！');
                        location.href = 'login.html';
                    }else{
                        $('.shouji_box .msg2').show();
                    }
                }
            })
        }
    })
    
})