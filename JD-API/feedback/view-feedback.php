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

$name=$_GET['shopname'];

    $sql ="SELECT review,rate,username FROM `rating` WHERE shopname='$name'" ;

    $stmt = $conn->prepare($sql);

    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => 1,
        'data' => $data,
    ]);