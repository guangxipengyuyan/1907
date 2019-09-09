<?php
    include 'conn.php';
    $uname = isset($_POST['uname']) ? $_POST['uname'] : '';
    $sql5="SELECT * FROM cart WHERE uname='$uname' ";
    $res5=$conn->query($sql5);
    $data5=$res5->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data5,JSON_UNESCAPED_UNICODE);
?>