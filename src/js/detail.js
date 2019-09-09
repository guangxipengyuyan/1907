$(function(){

    $('.meizhuang').hover(function(){
        $('.meizhuang_hide').stop().slideDown();
    },function(){
        $('.meizhuang_hide').stop().slideUp();
    });
      
    var phone = getCookie("phone");
    // console.log(phone)
    if(phone){
        // $('.denglu').css({'display':'none'});
        $('.zhuce').css({'display':'none'});
        $('.denglu ').html(phone)
    }
       
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

    $('.goods_news').click(function(){
        $('html').animate({'scrollTop':'2100'},100);
    })

    $(document).scroll(function(){
        let a = $('html').scrollTop()
        // console.log(a)
        if(a > 870){
            $('.deal_tab_nav').addClass('deal_tab_nav_move');
        }else{
            $('.deal_tab_nav').removeClass('deal_tab_nav_move');
        }
    })

    $('.right_nav a').hover(function(){
        $(this).siblings().stop().animate({'left':'-92px','opacity':'1'},300,'linear');
    },function(){
        $(this).siblings().stop().animate({'left':'-130px','opacity':'0'},300,'linear');
    })


    var aa = window.location.search;
    var arra=aa.split('=');//切成数组 
    var bb = arra[1];//选中他的第二个  就是你在列表页传过来的data-id
        $.ajax({
            type:'post',
            url:'../api/detail.php',
            data:'uid='+bb,
            success:function(str){
                var  aaa = JSON.parse(str);
                // console.log(aaa)
                var res= aaa.map(function(item){
                        return `
                        <div class="deal_main_left fl" cid="${item.cid}">
                        <div class="glass_box1">
                            <img src="${item.imgs}" alt="">
                        </div>
                        <div class="glass_cover"></div>
                        <div class="glass_box2">
                            <img src="${item.imgs}" alt="">
                        </div>
    
                        <div id="jiathis" class="jiathis_style fl">
                            <a href="javascript:;" class="jiathis_txt" target="_blank">分享到 &gt;</a>
                        </div>
                    </div>
    
    
                    <div class="deal_main_right fr">
                        <div class="deal_title clear">
                            <div class="title_value fl">
                                <p>${item.titles}</p>
                            </div>
                        </div>
    
                        <div class="introduce">
                            <strong>【官方授权】</strong>${item.titles}
                        </div>
    
                        <div class="price_box clear">
                            <div class="price fl">
                                <em>￥</em><span class="pricess">${item.price}</span>
                            </div>
                            <div class="price_right fr">
                                <a href="javascript:;"> 价格详情 ></a>
                            </div>
                        </div>
    
                        <div class="serve_box">
                            <div>服务政策：</div>
                            <div>包邮政策：本商品满299元或2件包邮（新疆部分区域除外）</div>
                        </div>
                        <div class="mall_btn">
                            <a href="javascript:; id="mall_btn">加入购物车 ></a>
                        </div>
                    </div>
    
                    <div class="deal_prefer fl">
                        <div class="list"></div>
                        <div class="list"></div>
                        <div class="list"></div>
                        <div class="list"></div>
                    </div>
                        `
                }).join('');


                $('#ress').html(res);

                $(".deal_main_left").mouseenter(function() {
                    $(".glass_box2").show();
                    $(".glass_cover").show();
                })
                $(".deal_main_left").mouseleave(function() {
                    $('.glass_box2').hide();
                    $('.glass_cover').hide();
                })

                $('.deal_main_left').mousemove(function(e){
                    var l = e.pageX - $('.deal_main_left').offset().left - ($('.glass_cover').width() / 2);
                    var t = e.pageY - $('.deal_main_left').offset().top - ($('.glass_cover').height() / 2);
                    // console.log(l,t)
                    if(l < 0){
                        l = 0;
                    }else if(l > ($('.glass_box1').width() - $('.glass_cover').width())){
                        l = $('.glass_box1').width() - $('.glass_cover').width();
                    }
            
                    if(t < 0){
                        t = 0;
                    }else if(t > ($('.glass_box1').height() - $('.glass_cover').height())){
                        t = $('.glass_box1').height() - $('.glass_cover').height();
                    }
                    
                    $('.glass_cover').css({'left': l,'top': t});
            
                    var leftratio = l / ($('.glass_box1').width() - $('.glass_cover').width());
                    var topratio = t / ($('.glass_box1').height() - $('.glass_cover').height());
            
                    var imgleft = ($('.glass_box2 img').width() - $('.glass_box2').width()) * leftratio;
                    var imgtop = ($('.glass_box2 img').height() - $('.glass_box2').height()) * topratio;
            
                    $('.glass_box2 img').css({'left': -imgleft , 'top': -imgtop});
                });

                // console.log(bb)

                $('.mall_btn').on('click',function(){
                    var num = '1';
                    var cid = bb;
                    if(phone){
                        $.ajax({
                            type:'post',
                            async:true,
                            data:'cid='+cid+'&num='+num+'&uname='+phone,
                            url:'../api/port2.php',
                            success:function(str){
                                
                            }
                        });
                        location.href = 'cart.html?uid.'+phone;
                    }else{
                        alert('请登录')
                        return false;
                    }
                });
            }

        })


        
})