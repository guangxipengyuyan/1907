<?php
    include 'conn.php';
    $cid=isset($_POST['cid']) ? $_POST['cid'] : '';
    $fn=isset($_POST['fn']) ? $_POST['fn'] : '';
    $num=isset($_POST['num']) ? $_POST['num'] : '';
    $xiaoji=isset($_POST['xiaoji']) ? $_POST['xiaoji'] : '';
    if($fn=='dele'){
        $sql="DELETE FROM cart WHERE cid='$cid'";
        $res= $conn->query($sql);
        $data=$res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    };
    if($fn=='jia'){
        $sql="UPDATE cart SET num=$num,xiaoji=$xiaoji WHERE cid=$cid";
        $res= $conn->query($sql);
    };
    if($fn=='jian'){
        $sql="UPDATE cart SET num=$num,xiaoji=$xiaoji WHERE cid=$cid";
        $res= $conn->query($sql);
    }
    if($fn=='total'){
        $sql="SELECT num,xiaoji FROM cart WHERE cid=$cid";
        $res= $conn->query($sql);
        $data=$res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    
?>