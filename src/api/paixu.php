<?php
include 'conn.php';
    $fn = isset($_POST['fn']) ? $_POST['fn'] : '';
    if($fn == 'shengxu'){
        $sql="SELECT * FROM list order by price  LIMIT ";
        $res= $conn->query($sql);
        $data=$res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    if($fn == 'jiangxu'){
        $sql="SELECT * FROM list  order by price DESC";
        $res= $conn->query($sql);
        $data=$res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    if($fn == 'default'){
        $sql = "SELECT * FROM list order by cid ";
        $res= $conn->query($sql);
        $data=$res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
?>