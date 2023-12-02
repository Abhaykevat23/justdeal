<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request!.Only POST method is allowed',
    ]);
    exit;
endif;
 
require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection(); 
$data = json_decode(file_get_contents("php://input"));

    $review = htmlspecialchars(trim($data->review));
    $username = $data->username;
    $shopname = htmlspecialchars(trim($data->shopname));
    $email = htmlspecialchars(trim($data->usermail));
    $rate = htmlspecialchars(trim($data->rate));
    $query = "INSERT INTO `rating`(
    review,
    username,
    shopname,
    email,
    rate
    ) 
    VALUES(
    :review,
    :username,
    :shopname,
    :email,
    :rate
    )";
 
    $stmt = $conn->prepare($query);
 
    $stmt->bindValue(':review', $review, PDO::PARAM_STR);
    $stmt->bindValue(':username', $username, PDO::PARAM_STR);
    $stmt->bindValue(':shopname', $shopname, PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':rate', $rate, PDO::PARAM_STR);
    if ($stmt->execute()) {
 
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'data' => $email,
        ]);
        exit;
    }
    
    echo json_encode([
        'success' => 0,
        'message' => 'There is some problem in data inserting'
    ]);
    exit;

