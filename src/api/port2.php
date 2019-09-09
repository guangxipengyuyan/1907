<?php
/*
    点击加入购物车，先查询订单表，然后更新订单表
        get:
            uid:商品id
            num：商品数量
        返回：
            订单表的所有数量
 */

    //加入购物车，把数据写入订单表
    include 'conn.php';
	$uname=isset($_POST['uname']) ? $_POST['uname'] : '';
    $num=isset($_POST['num']) ? $_POST['num'] : '1';
    $uid=isset($_POST['cid']) ? $_POST['cid'] : '';

    //查询订单表是否有该uid商品
    $sql="SELECT * FROM cart WHERE cid='$uid'";
    $res= $conn->query($sql);
   
    

    // if($res->num_rows>0){
    //     echo '1';
    // }else{
    //     echo '0';
    // }
    $res2 = null;
    // print_r($res);
    if($res->num_rows>0){
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $gnum = $data[0]['num'];
        // $aa = $data[0]['price']; //原单价
        $nowNum = $gnum+$num; //原本数量加上用户传过来的数量
        // var_dump($nowNum)
        $sql2="UPDATE cart SET num=$nowNum WHERE cid=$uid";
        $res2=$conn->query($sql2);
        // echo 'into';
    }else{
        $sql3="SELECT * FROM list WHERE cid=$uid"; //总表查询
        $res3=$conn->query($sql3);
        if($res3->num_rows>0){
            $data3= $res3 -> fetch_all(MYSQLI_ASSOC);
            $imgs = $data3[0]['imgs'];
            $titles = $data3[0]['titles'];
            // $oprice = $data3[0]['oldprice'];
            // $aa = $data3[0]['price'];//原单价
            // $yaodian=$data3[0]['yaodian'];//药店名
            // print_r($aa,$num);
            // $end = $aa * $gnum;
            $xiaoji = $data3[0]['xiaoji'];
            $price = $data3[0]['price'];
            // $newprice = ($gprice*$num);
            // $oldprice = ($oprice*$num);
            // $newyhprice = ($oldprice-$newprice);
            $sql4="INSERT INTO cart (cid,uname,num,imgs,titles,price,xiaoji) VALUES ('$uid','$uname','$num','$imgs','$titles','$price','$xiaoji')";
            $res2=$conn->query($sql4);
        }
    }
    if($res2){
        $sql5="SELECT * FROM cart";
        $res5=$conn->query($sql5);
        $data5=$res5->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data5,JSON_UNESCAPED_UNICODE);
    }else{
        echo 0;
    }



?>