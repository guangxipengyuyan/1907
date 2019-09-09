<?php
 include 'conn.php';//连接数据库 


 $uidd = isset($_POST['uid']) ? $_POST['uid'] : '';
 $sql3 = "SELECT * FROM list WHERE cid=$uidd";
  //执行sql语句
  $res3 = $conn -> query($sql3);
  $arr3 =$res3->fetch_all(MYSQLI_ASSOC);//获取大数据里面所查询到的数据
     // var_dump($arr3);
  echo json_encode($arr3,JSON_UNESCAPED_UNICODE);


?>