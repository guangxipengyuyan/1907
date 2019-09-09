$(function(){
    var phone = getCookie("phone")
    // console.log(phone)
    if(phone){
        $('.tips').css({'display':'none'});
        $('.zhuce').css({'display':'none'});
        $('.denglu ').html(phone);
    }

    // var aa = window.location.search;
    // var arra=aa.split('.');//切成数组
    // var bb = arra[1];
    // var cc = arra[3];
    // console.log(bb,cc)

        function ajaxjx(res){
            ress = res.map(function(item){
                return `
                <ul class="allul clear" cid="${item.cid}">
                    <li><input type="checkbox" class="js_item_selector ones" data-item-key="df4770958198140262_" data-app="all" /"></li>
                    <li class="goods_box">
                        <img src="${item.imgs}" alt="">
                        <div class="goods_content fl">
                            <p class="goods_name">${item.titles}</p>
                            <p class="goods_style"> 型号 ： <span>黑色 </span></p>
                        </div>
                    </li>
                    <li>
                        <div class="cart_item_price ">
                            <p class="prices">${item.price}</p>
                            <p class="dels"><del></del></p>
                        </div>
                        <div class="cart_item_num clear">
                            <span class="jian">-</span>
                            <input type="text" value="${item.num}" class="num">
                            <span class="jia">+</span>
                        </div>
                        <div class="cart_item_total">${item.xiaoji}</div>
                        <div class="cart_item_option ">
                            <i></i>
                        </div>
                    </li>
                </ul>
                `
            }).join('');
            return ress;
        }
    

    $.ajax({
        type:'post',
        async:true,
        data:'uname='+phone,
        url:'../api/cart.php',
        success:function(str){
            var res = JSON.parse(str);
            var aabb =  ajaxjx(res);
            // console.log(res)
            $('#good').html(aabb);
            if($('.goods_list ul').length > 0){
                $('.cart_main_hide').hide();
            }else{
                $('.cart_main_hide').show();
            }

            

            $('.cart_item_num').on('click','.jia',function(){
                var cid = $(this).parent().parent().parent().attr('cid')
                var num = $(this).prev().val() * 1;
                var fn = 'jia';
                num++;
                var prices = $(this).parent().prev().find('.prices').html();
                // var xiaoji = $(this).parent().next().html();
                // console.log(prices * num);
                $(this).parent().next().html(prices * num);
                $(this).prev().val(num);
                var xiaoji = prices * num;
                // console.log(xiaoji)
                $.ajax({
                    type:'post',
                    async:true,
                    data:'cid='+cid+'&fn='+fn+'&num='+num+'&xiaoji='+xiaoji,
                    url:'../api/del.php',
                    success:function(str){
                        
                    }
                })
                // total()
            });
        
            $('.cart_item_num').on('click','.jian',function(){
                var cid = $(this).parent().parent().parent().attr('cid')
                // console.log(cid)
                var fn = 'jian';
                var num = $(this).next().val() * 1;
                num--;
                if(num <= 1){
                   num = 1;
                }
                var prices = $(this).parent().prev().find('.prices').html();
                $(this).parent().next().html(prices * num)
                $(this).next().val(num);
                var xiaoji = prices * num;
                //  console.log(num)
                $.ajax({
                    type:'post',
                    async:true,
                    data:'cid='+cid+'&fn='+fn+'&num='+num+'&xiaoji='+xiaoji,
                    url:'../api/del.php',
                    success:function(str){
                        
                    }
                })
                // total()

            });

            $("#js_all_selector").on("click",function(){
                $(".ones").prop("checked",this.checked);
            })

            $('.js_group_selector').on('click',function(){
                $('.ones').each(function(){
                    if($(this).prop('checked')){
                        $(this).prop('checked',false)
                    }else{
                        $(this).prop('checked',true)
                    }
                });
                
            })

            $('.cart_item_option i').on('click',function(){
                var cid = $(this).parent().parent().parent().attr('cid')
                var fn ='dele';
                // console.log(cid)
                $.ajax({
                    type:'post',
                    async:true,
                    data:'cid='+cid+'&fn='+fn,
                    url:'../api/del.php',
                    success:function(str){
                    // console.log(str)
                    }
                })
                $(this).parent().parent().parent().remove();
                
            })

            


            function total(){
                var total_money = 0;
                var total_count = 0;
                $('.ones').on('click',function(){
                    if($(this).is(':checked')){
                        // var good = 0;
                        // var num = 0;
                        // console.log(cid)
                        
                        var good = parseInt($(this).parent().parent().find('.cart_item_total').html());
                        var num = parseInt($(this).parent().parent().find('.num').val());
                        total_money += good;
                        total_count += num;
                        if(total_money<=0,total_count<=0){
                            total_count = 0
                            total_money = 0;
                        }
                        console.log(total_money,total_count);
                        $('.total_amount').html(total_count);
                        $('.total_price').html(total_money);
                    }else {
                        var good = parseInt($(this).parent().parent().find('.cart_item_total').html());
                        var num = parseInt($(this).parent().parent().find('.num').val());
                        total_money -= good;
                        total_count -= num;
                        if(total_money<=0,total_count<=0){
                            total_count = 0
                            total_money = 0;
                        }
                        console.log(total_money,total_count);
                        $('.total_amount').html(total_count);
                        $('.total_price').html(total_money);
                    }
                })

            }
            // total()

            // function total(){
            //     var btns = new Array();
            //     $('.cart_item_total').each(function(key){
            //         btns[key] = $(this).html();
            //     });
            //     // console.log(btns)
    
            //     var sum = 0;
            //     for(var i=0;i<btns.length;i++){
            //         sum += btns[i] *1;
            //     }
            //     // console.log(sum)

            //     $('.total_price').html(sum)
            // }
            // total();


            $('.clear_cart_all').on('click',function(){
                // var a = $('.goods_list').children().find('.ones');
                $('.ones').each(function(){
                    if($(this).prop('checked')){
                        var fn = 'dele';
                        var cid = $(this).parent().parent().attr('cid');
                        // console.log(cid)
                        $.ajax({
                            type:'post',
                            async:true,
                            data:'fn='+fn+'&cid='+cid,
                            url:'../api/del.php',
                            success:function(str){
                                // console.log(str)
                            }
                        })
                        $(this).parent().parent().remove();
                    }

                })
            })


            }
        });

    
})
        
        
