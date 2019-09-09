<?php
    include 'conn.php';
    // $conn->query("SET NAMES utf8");
    // $lis = isset($_POST['lis']) ? $_POST['lis'] : '';
    $mysql ="SELECT * FROM `index` ORDER BY RAND() LIMIT 9";
    $res = $conn -> query($mysql);
    $arr =$res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr)
    $sql2 = "SELECT * FROM `index` ";
    $res2 = $conn->query($sql2);
    $st = array(
        'data'=> $arr,
        'tota' => $res2->num_rows,
        // 'lis' => $lis,
    );
    echo json_encode($st,JSON_UNESCAPED_UNICODE);

?>