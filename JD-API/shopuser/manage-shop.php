<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
error_reporting(E_ERROR);
if ($_SERVER['REQUEST_METHOD'] !== 'GET') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Reqeust Detected! Only get method is allowed',
    ]);
    exit;
endif;

require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();
$id = null;

$user=$_GET['user'];

    $sql ="SELECT * FROM `travel` WHERE user='".$user."' ";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $data = null;
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $sql2 ="SELECT * FROM `doctor` WHERE user='".$user."' ";
    $stmt2 = $conn->prepare($sql2);
    $stmt2->execute();
    $data2 = null;
    $data2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);

    $sql3 ="SELECT * FROM `restaurant` WHERE user='".$user."' ";
    $stmt3 = $conn->prepare($sql3);
    $stmt3->execute();
    $data3 = null;
    $data3 = $stmt3->fetchAll(PDO::FETCH_ASSOC);

    $sql4 ="SELECT * FROM `vehicle` WHERE user='".$user."' ";
    $stmt4 = $conn->prepare($sql4);
    $stmt4->execute();
    $data4 = null;
    $data4 = $stmt4->fetchAll(PDO::FETCH_ASSOC);

    $sql5 ="SELECT * FROM `education` WHERE user='".$user."' ";
    $stmt5 = $conn->prepare($sql5);
    $stmt5->execute();
    $data5 = null;
    $data5 = $stmt5->fetchAll(PDO::FETCH_ASSOC);

    $sql6 ="SELECT * FROM `lawyer` WHERE user='".$user."' ";
    $stmt6 = $conn->prepare($sql6);
    $stmt6->execute();
    $data6 = null;
    $data6 = $stmt6->fetchAll(PDO::FETCH_ASSOC);

    $sql7 ="SELECT * FROM `contractor` WHERE user='".$user."' ";
    $stmt7 = $conn->prepare($sql7);
    $stmt7->execute();
    $data7 = null;
    $data7 = $stmt7->fetchAll(PDO::FETCH_ASSOC);

    $sql8 ="SELECT * FROM `decoration` WHERE user='".$user."' ";
    $stmt8 = $conn->prepare($sql8);
    $stmt8->execute();
    $data8 = null;
    $data8 = $stmt8->fetchAll(PDO::FETCH_ASSOC);

    $sql9 ="SELECT * FROM `beauty` WHERE user='".$user."' ";
    $stmt9 = $conn->prepare($sql9);
    $stmt9->execute();
    $data9 = null;
    $data9 = $stmt9->fetchAll(PDO::FETCH_ASSOC);

    $sql10 ="SELECT * FROM `estate` WHERE user='".$user."' ";
    $stmt10 = $conn->prepare($sql10);
    $stmt10->execute();
    $data10 = null;
    $data10 = $stmt10->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => 1,
        'data' => $data,
        'data2'=> $data2,
        'data3'=> $data3,
        'data4'=> $data4,
        'data5'=> $data5,
        'data6'=> $data6,
        'data7'=> $data7,
        'data8'=> $data8,
        'data9'=> $data9,
        'data10'=> $data10,
    ]);
?>