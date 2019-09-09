<?php
    include 'conn.php';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $psw = isset ($_POST['psw']) ? $_POST['psw'] : '';
    $mysql = "SELECT * FROM login WHERE phone='$phone' AND pass='$psw'";
    $res = $conn -> query($mysql);
    // var_dump($res)
    if($res->num_rows>0){
        echo 1;  
    }else{
        echo 0;
    }
?>