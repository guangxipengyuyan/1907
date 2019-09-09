<?php
        include 'conn.php';
        $phone = isset ($_POST['phone']) ? $_POST['phone'] : '';
        $psw = isset ($_POST['psw']) ? $_POST['psw'] : '';
        $sql = "INSERT INTO login(phone,pass) VALUES('$phone','$psw')";
        $res = $conn -> query($sql); //除了select查找的 返回的都是布尔值;
        if($res){
            echo 1;  //代表真
        }else{
            echo 0;
        }
?>