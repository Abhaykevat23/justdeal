<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


 $method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}


if ($_SERVER['REQUEST_METHOD'] !== 'PUT') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request detected! Only PUT method is allowed',
    ]);
    exit;
endif;

require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));

try {

    $fetch_post = "SELECT * FROM `user` WHERE id=:id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $data->id, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :

        $row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
        $name = isset($data->name) ? $data->name : $row['name'];
        $email = isset($data->email) ? $data->email : $row['email'];
        $password = isset($data->password) ? $data->password : $row['password'];
        $city = isset($data->city) ? $data->city : $row['city'];

       $update_query = "UPDATE `user` SET name=:name,email=:email,
        password = :password,city= :city
        WHERE id = :id";

        $update_stmt = $conn->prepare($update_query);

        $update_stmt->bindValue(':password', htmlspecialchars(strip_tags($password)), PDO::PARAM_STR);
        $update_stmt->bindValue(':name', htmlspecialchars(strip_tags($name)), PDO::PARAM_STR);
        $update_stmt->bindValue(':email', htmlspecialchars(strip_tags($email)), PDO::PARAM_STR);
        $update_stmt->bindValue(':city', htmlspecialchars(strip_tags($city)), PDO::PARAM_STR);

        $update_stmt->bindValue(':id', $data->id, PDO::PARAM_INT);


        if ($update_stmt->execute()) {

            echo json_encode([
                'success' => 1,
                'message' => 'Record udated successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Did not udpate. Something went  wrong.'
        ]);
        exit;

    else :
        echo json_encode(['success' => 0, 'message' => 'Invalid ID. No record found by the ID.']);
        exit;
    endif;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}