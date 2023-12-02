<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}


if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Reqeust detected. HTTP method should be DELETE',
    ]);
    exit;
endif;

require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));

$id =  $_GET['id'];
$field=$_GET['field'];

// if($field == 'doctor'){
    $fetch_post = "SELECT * FROM `doctor` WHERE id=:id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $fetch_stmt->execute();

    $delete_post = "DELETE FROM `doctor` WHERE id=:id";
    $delete_post_stmt = $conn->prepare($delete_post);
    $delete_post_stmt->bindValue(':id', $id,PDO::PARAM_INT);
// }
// else if($field == 'travel'){
//     $fetch_post = "SELECT * FROM `travel` WHERE id=:id";
//     $fetch_stmt = $conn->prepare($fetch_post);
//     $fetch_stmt->bindValue(':id', $id, PDO::PARAM_INT);
//     $fetch_stmt->execute();

//     $delete_post = "DELETE FROM `travel` WHERE id=:id";
//     $delete_post_stmt = $conn->prepare($delete_post);
//     $delete_post_stmt->bindValue(':id', $id,PDO::PARAM_INT);
// }

if ($delete_post_stmt->execute()) {
    echo json_encode([
        'success' => 1,
        'data' => $id,
    ]);
    exit;
}