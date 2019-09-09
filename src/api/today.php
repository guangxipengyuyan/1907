<?php
    include 'conn.php';
    // $conn->query("SET NAMES utf8");
    $mysql ="SELECT * FROM `today` ORDER BY RAND() LIMIT 6";
    $res = $conn -> query($mysql);
    $arr =$res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr)
    $sql2 = "SELECT * FROM `today` ";
    $res2 = $conn->query($sql2);
    $st = array(
        'data'=> $arr,
        'tota' => $res2->num_rows
    );
    echo json_encode($st,JSON_UNESCAPED_UNICODE);

?>