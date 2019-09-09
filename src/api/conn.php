<?php
    $servername = 'localhost';
    $username ='root';
    $passname='';
    $dbname ='1111';
    $conn = new mysqli($servername,$username,$passname,$dbname);
    if($conn->connect_error){
        die('连接失败：'.$conn->connect_error);
    }
    
?>