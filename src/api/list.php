<?php
        include 'conn.php';//连接数据库 
        //  header('Content-type: application/json');
        //先拿到数据
        $ye = isset($_POST['iye']) ? $_POST['iye'] : '';
        $tiao = isset($_POST['itiao']) ? $_POST['itiao'] : '';
        $fn = isset($_POST['fn']) ? $_POST['fn'] : '';
        
        $index = ($ye-1)*$tiao;

        if(!$fn){
            $mysql ="SELECT * FROM `list` LIMIT  $index,$tiao";
            $res = $conn -> query($mysql);
                // echo $res
            $arr =$res->fetch_all(MYSQLI_ASSOC);//获取大数据里面所查询到的数据
            $sql2 = "SELECT * FROM list";
            $res2 = $conn->query($sql2);
            $st = array(
                'data'=> $arr,//查询到的一段数据
                'tota' => $res2->num_rows,//得到的数据的总长度
                'tiao' => $tiao,
                'ye' => $ye,
            );
            echo json_encode($st,JSON_UNESCAPED_UNICODE);
        }
    

        if($fn == 'shengxu'){
            $mysql ="SELECT * FROM `list` order by price LIMIT $index,$tiao";
            $res = $conn -> query($mysql);
            $data=$res->fetch_all(MYSQLI_ASSOC);
            // echo json_encode($data,JSON_UNESCAPED_UNICODE);
            $sql2 = "SELECT * FROM list";
            $res2 = $conn->query($sql2);
            $st = array(
                'data'=> $data,//查询到的一段数据
                'tota' => $res2->num_rows,//得到的数据的总长度
                'tiao' => $tiao,
                'ye' => $ye,
            );
            echo json_encode($st,JSON_UNESCAPED_UNICODE);
        }
        if($fn == 'jiangxu'){
            $mysql ="SELECT * FROM `list` order by price DESC LIMIT $index,$tiao";
            $res = $conn -> query($mysql);
            $data=$res->fetch_all(MYSQLI_ASSOC);
            $sql2 = "SELECT * FROM list";
            $res2 = $conn->query($sql2);
            $st = array(
                'data'=> $data,
                'tota' => $res2->num_rows,//得到的数据的总长度
                'tiao' => $tiao,
                'ye' => $ye,
            );
            echo json_encode($st,JSON_UNESCAPED_UNICODE);
        }
        if($fn == 'sales'){
            $mysql ="SELECT * FROM `list` order by buys DESC LIMIT $index,$tiao";
            $res = $conn -> query($mysql);
            $data=$res->fetch_all(MYSQLI_ASSOC);
            $sql2 = "SELECT * FROM list";
            $res2 = $conn->query($sql2);
            $st = array(
                'data'=> $data,
                'tota' => $res2->num_rows,//得到的数据的总长度
                'tiao' => $tiao,
                'ye' => $ye,
            );
            echo json_encode($st,JSON_UNESCAPED_UNICODE);
        }
?>