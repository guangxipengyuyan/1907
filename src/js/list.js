$(function(){
    $('.letter').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected')
    })

    $('.box_right .nav a').hover(function(){
        $(this).css({'color':'#ed145b'})
    },function(){
        $(this).css({'color':'#666'})
    })

    isok = false;
    $('.box_right span a').click(function(){
        if(!isok){
            $('.pinpai_hide').show();
            isok = !isok;
        }else{
            $('.pinpai_hide').hide();
            isok = !isok;
        }
    })

    $('.meizhuang').hover(function(){
        $('.meizhuang_hide').stop().slideDown();
    },function(){
        $('.meizhuang_hide').stop().slideUp();
    })


    function ajaxjx(res){
        ress = res.map(function(item){
            return `
            <li class="goods" cid="${item.cid}">
            <div class="item_wrap clearfix  " style="left: -16px;">
                <div class="item_wrap_right">
                    <div class="s_l_pic">
                        <div class="icon_wrap clearfix">
                            <strong style="color: #ec2b8c">【海外自营】</strong>
                        </div>
                        <a href="###">
                            <img src="${item.imgs}" style="display: inline;">
                        </a>
                    </div>

                    <div class="s_l_name">
                        <a href="###">${item.titles}</a>
                    </div>
                    <div class="s_l_view_bg">
                        <div class="icon_wrap_bot clear">
                    </div>
                    <div class="search_list_price">
                        <label>¥</label>
                        <span>${item.price}</span>
                        <del>¥${item.dels}</del>                                                                                                                                </div>
                    </div>
                    <div class="search_deal_buttom_bg clear">
                        <div class="search_pl">月销${item.buys}笔</div>
                    </div>
                    <div class="search_list_button">
                        <a class="track_click" title="去看看" href="###"></a>
                    </div>
                    <p class="search_list_tags">
                        <span>均匀肤色</span>
                        <span>持久</span>
                        <span>美白</span>
                        <span>定妆</span>
                        <span>隔离</span>
                    </p>
                </div>
            </div>
        </li>
            `
        }).join('');
       return ress;
    }


    let ye = 1;
    let itiao = 8;
    let fn = '';
    //先渲染第一页
    $.ajax({
            type:'post',
            data:'iye='+ye+'&itiao='+itiao+'&fn='+fn,
            url:'../api/list.php',
            success:function(str){
                var att = JSON.parse(str);
                // console.log(str)
                var res = att.data;//去渲染的数据
                var aabb =  ajaxjx(res);
                $('#reslist').html(aabb);
                var yey = Math.ceil(att.tota/att.tiao);//总页码数
                var gezi = '';//多少ye就有多少格子
                for(var i=0;i<yey;i++){
                    gezi += `<li><a href="javascript:;">${i+1}</a></li>`;
                }
                $('.page_nav').html(gezi);
                $('.page_nav li').eq(0).addClass('current');//第一个盒子加类名
            
           }
        })


        $('.page_nav').on('click','li',function(){
            var _this = $(this);//改变下面ajax里面的this指向
            var yeshu = $(this).children().html();
            console.log(fn)
            $.ajax({
                    type:'post',
                    async:true,
                    data:'iye='+yeshu+'&itiao='+itiao+'&fn='+fn,
                    url:'../api/list.php',
                    success:function(str){
                        var att = JSON.parse(str);   
                        var res2 = att.data;
                        var aabc = ajaxjx(res2);
                    $('#reslist').html(aabc);//替换
                    //排他
                    var yey = Math.ceil(att.tota/att.tiao);//总页码数
                    for(var i=0;i<yey;i++){
                        $('.page_nav li').removeClass('current');//清除之前的类名
                    }
                    _this.addClass('current');//点击当前哪个哪个的类名就为current
                    }
            })
        })

        $('#reslist').on('click','li',function(){
            var dataId =$(this).attr("cid");
            location.href = 'detail.html?uid='+dataId;//把data-id传到详情页去
        })


        one = false;
        $('#price').click(function(){
            if(!one){
                $(this).addClass('price_up').removeClass('price_down');
                fn = 'shengxu';
                // console.log(fn)
                $.ajax({
                    type:'post',
                    async:true,
                    data:'fn='+fn+'&iye='+ye+'&itiao='+itiao,
                    url:'../api/list.php',
                    success:function(str){
                        var att = JSON.parse(str);   
                        var res2 = att.data;
                        // console.log(att)
                        var aabc = ajaxjx(res2);
                        $('#reslist').html(aabc);
                        var yey = Math.ceil(att.tota/att.tiao);//总页码数
                        var gezi = '';//多少ye就有多少格子
                        for(var i=0;i<yey;i++){
                            gezi += `<li><a href="javascript:;">${i+1}</a></li>`;
                        }
                        $('.page_nav').html(gezi);
                        $('.page_nav li').eq(0).addClass('current');//第一个盒子加类名
                    }
                })
                one = !one;
            }else{
                $(this).addClass('price_down').removeClass('price_up');
                fn = 'jiangxu';
                $.ajax({
                    type:'post',
                    async:true,
                    data:'fn='+fn+'&iye='+ye+'&itiao='+itiao,
                    url:'../api/list.php',
                    success:function(str){
                        var att = JSON.parse(str);   
                        var res2 = att.data;
                        // console.log(att)
                        var aabc = ajaxjx(res2);
                        $('#reslist').html(aabc);
                        var yey = Math.ceil(att.tota/att.tiao);//总页码数
                        var gezi = '';//多少ye就有多少格子
                        for(var i=0;i<yey;i++){
                            gezi += `<li><a href="javascript:;">${i+1}</a></li>`;
                        }
                        $('.page_nav').html(gezi);
                        $('.page_nav li').eq(0).addClass('current');//第一个盒子加类名
                    }
                })
                one = !one;
            }
        })


        
        $('#default').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $.ajax({
                type:'post',
                async:true,
                data:'iye='+ye+'&itiao='+itiao+'&fn='+fn,
                url:'../api/list.php',
                success:function(str){
                    // console.log(str)
                    var att = JSON.parse(str);
                    var res2 = att.data;
                    var aabc = ajaxjx(res2);
                    $('#reslist').html(aabc);
                    var yey = Math.ceil(att.tota/att.tiao);//总页码数
                    var gezi = '';//多少ye就有多少格子
                    for(var i=0;i<yey;i++){
                        gezi += `<li><a href="javascript:;">${i+1}</a></li>`;
                    }
                    $('.page_nav').html(gezi);
                    $('.page_nav li').eq(0).addClass('current');//第一个盒子加类名
                }
            })
        })

        $('#sales').click(function(){
            fn = 'sales';
            $.ajax({
                type:'post',
                async:true,
                data:'iye='+ye+'&itiao='+itiao+'&fn='+fn,
                url:'../api/list.php',
                success:function(str){
                    // console.log(str)
                    var att = JSON.parse(str);
                    var res2 = att.data;
                    var aabc = ajaxjx(res2);
                    $('#reslist').html(aabc);
                    var yey = Math.ceil(att.tota/att.tiao);//总页码数
                    var gezi = '';//多少ye就有多少格子
                    for(var i=0;i<yey;i++){
                        gezi += `<li><a href="javascript:;">${i+1}</a></li>`;
                    }
                    $('.page_nav').html(gezi);
                    $('.page_nav li').eq(0).addClass('current');//第一个盒子加类名
                }
            })
        })
})