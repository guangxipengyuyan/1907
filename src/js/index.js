$(function(){

    var phone = getCookie("phone")
    // console.log(phones)
    if(phone){
        // $('.denglu').css({'display':'none'});
        $('.zhuce').css({'display':'none'});
        $('.denglu ').html(phone);
        $('.tuichu').show();
    }

    var psw = getCookie("psw")
    $('.tuichu').click(function(){
        // console.log(psw)
        removeCookie('phone','/');
        removeCookie('psw','/');
        window.location.reload();
    })


    // 轮播
    $('.banner_images li').fadeOut(['slow']);
    $('.banner_images li').eq(0).fadeIn(['slow']);
    var i = 0;
    var time = setInterval(dong,4000);
    function dong(){
        i++;
        if(i>1){
            i=0;
        }
        $('.banner_images li').eq(i).fadeIn(['slow']).siblings().fadeOut(['slow']);
        gensui();
    }
    time;

    $('.banner_images li').each(function(i,item){
        $('.banner .list_bot').append(` <a href="javascript:;">${i+1}</a>`)
    })

    $('.banner .list_bot a').eq(0).addClass('active');
    function gensui(){
        $('.banner .list_bot a').eq(i).addClass('active').siblings().removeClass('active');
    }

    $('.banner .list_bot a').on('mouseover',function(){
        var index = $(this).index();
        $('.banner_images li').eq(index).fadeIn(['slow']).siblings().fadeOut(['slow']);
        $('.banner .list_bot a').eq(index).addClass('active').siblings().removeClass('active');
        clearInterval(time);
    })

    $('.banner_images').hover(function(){
        clearInterval(time);
    },function(){
        time = setInterval(dong,4000);
    })

    // 头部
    $('.myjumei').hover(function(){
        $('.myjumei_nav').stop().slideDown();
    },function(){
        $('.myjumei_nav').stop().slideUp();
    })

    $('.more').hover(function(){
        $('.more_nav').stop().slideDown();
    },function(){
        $('.more_nav').stop().slideUp();
    })

    $('.meizhuang').hover(function(){
        $('.meizhuang_hide').stop().slideDown();
    },function(){
        $('.meizhuang_hide').stop().slideUp();
    })

    
    $('.today').on('click',function(){
        $('.today').addClass('current').siblings().removeClass('current');
        $('.today_box').show();
        $('.tomorrow_box').hide();
        $('.sanjiao').css('left','128px');
        $('html').animate({scrollTop:'530px'}, 100);
    })

    $('.tomorrow').on('click',function(){
        $('.tomorrow').addClass('current').siblings().removeClass('current');
        $('.tomorrow_box').show();
        $('.today_box').hide();
        $('.sanjiao').css('left','360px');
        $('html').animate({scrollTop:'530px'}, 100);
    })

    function gotop(){
        if($('html').scrollTop() > 530){
            $('.gotop a').show();
        }else{
            $('.gotop a').hide();
        }
        setTimeout(gotop);
    }
    gotop(); 
    
    $('.gotop a').click(function(){
        $('html').animate({scrollTop:'0px'}, 100);
    })
    
    // 右导航
    $('.right_nav a').hover(function(){
        $(this).siblings().stop().animate({'left':'-92px','opacity':'1'},300,'linear').show();
    },function(){
        $(this).siblings().stop().animate({'left':'-130px','opacity':'0'},300,'linear').hide();
    })
    
    
    // 渲染
    function ajaxjx(res){
        ress = res.map(function(item){
            return `<li class="goods_box" cid="${item.cid}">
            <div class="${item.tags}"></div>
            <div class="add_cart_box">
                <a href="javascript:;">加入购物车</a>
            </div>
            <div class="goods_img">
                <a href=""><img src="${item.imgs}" alt=""></a>
                <div class="jieshao_box">
                    <div class="${item.jieshaonum}">
                        ${item.jieshao}
                    </div>
                </div>
            </div>
            <p class="title">
                <span>${item.spans}</span>
                ${item.titles}
            </p>
            <div class="goods_box_bottom">
                <div class="price fl">￥${item.price}</div>
                <del>￥${item.dels}</del>
            </div>
        </li>`;
        }).join('');
        return ress;
    }

    
    $.ajax({
        type:'get',
        async:true,
        url:'./api/index.php',
        success:function(str){
            // console.log(str)
            var att = JSON.parse(str);
            var res = att.data;
            var aa =  ajaxjx(res);
            $('#today_goods_ul').html(aa);
        }
    })
    

    function ajaxtoday(res){
        a = res.map(function(item){
            return `
            <div class="meiribikan_goods_box" cid="${item.cid}">
            <a href="javascript:;" class="goods_img">
                <img src="${item.imgs}" alt="">
                <span class="today_top"></span>
            </a>
            <div class="tags"></div>
            <div class="meiribikan_goods_right">
                <div class="time">
                    <span class="icon">距特卖结束 </span>
                    <span class="today_time" end_time="68948">00<em>:</em>19<em>:</em>07<em>:</em>31</span>
                </div>
                <a href="javascript:;" target="_blank" class="product_short_title">
                    ${item.title}
                </a>
                <div class="product_price">
                    <div class="goto_cart fr"><a class="goto_cart_btn" href="javascript:;">加入购物车</a></div>
                    <span class="now_price fl"><em>¥</em>${item.price}</span>
                    <del>¥${item.dels}</del>
                </div>
                <div class="meiribikan_goods_right_bottom clear">
                    <span class="bottom_img fl"><img src="./images/index/global_sure_tag.jpg" alt=""></span>
                    <span class="buys fr"><em>${item.buys}</em>人已经购买</span>
                </div>
            </div>
        </div>
            `
        }).join('');
        return a;
    }

    $.ajax({
        type:'get',
        async:true,
        url:'./api/today.php',
        success:function(str){
            var att = JSON.parse(str);
            var res = att.data;
            // console.log(res)
            var bb =  ajaxtoday(res);
            $('#meiribikan_main').html(bb);
        }
    })


    
    var num = 4000;
    function xuanran(){
        if($('html').scrollTop() > num){
            $.ajax({
                type:'get',
                async:true,
                url:'./api/index.php',
                success:function(str){
                    var att = JSON.parse(str);
                    var res = att.data;
                    var aa =  ajaxjx(res);
                    $('#today_goods_ul').append(aa)
                }
            })
            num+=1800;
        }
        setTimeout(xuanran,200);
    }
    xuanran();

    

})