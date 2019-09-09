$(function(){
    $("input[name='method']").eq(0).attr('checked',true);

    $('.radio_dynamic').click(function(){
        $("input[name='method']").eq(0).attr('checked',true);
        form();
    })

    $('.radio_normal').click(function(){
        $("input[name='method']").eq(1).attr('checked',true);
        form();
    })
    
    function form(){
        if($("input[name='method']").eq(0).is(':checked')){
            $('.user1').show();
            $('.user2').hide();
        }else if($("input[name='method']").eq(1).is(':checked')){
            $('.user2').show();
            $('.user1').hide();
        }
    }


    $('.login_box input').focus(function(){
        $(this).css({'box-shadow':'0px 0px 2px #4491ff','border':'1px solid #4491ff'})
        $(this).parent().children('.text').show();
        if($(this).val()){
            $(this).parent().children('.text').hide();
        }
    })
    $('.login_box input').blur(function(){
        $(this).css({'box-shadow':'none','border':'1px solid #CFCFCF'})
        $(this).parent().children('.text').hide();
    })

    $('#drag').drag();


    $('.login_btn').click(function(){
        var a = $('.user2 .shouji').val();
        var b = $('.user2 .mima').val();
        if(a && b){
                $.ajax({
                    type : 'post',
                    data : 'phone='+a+'&psw='+b,
                    url : '../api/login.php',
                    success:function(str){
                        var arr = JSON.parse(str) * 1;
                       
                        if(arr == 1){
                            console.log('1')
                            setCookie('phone', a,'/',7);
                            setCookie('psw', b, '/',7 );
                            alert('登录成功');
                            // location.href = '../html/shouye.html';
                            location.href = '../html/shouye.html';
                        }else{
                            $('.shouji').val('');
                            $('.mima').val('');
                            alert('账号密码错误');
                        }
                    }
                });
        }
    })
})