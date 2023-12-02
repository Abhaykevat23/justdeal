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

    $fetch_post = "SELECT * FROM `travel` WHERE id=:id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $data->id, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :
        
        $fake=htmlspecialchars(trim($data->image));
        $image =str_replace('C:\fakepath','',$fake);
        
        $row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
        $traveller = isset($data->traveller) ? $data->traveller : $row['traveller'];
        // $image = isset($data->image) ? $data->image : $row['image'];
        $city = isset($data->city) ? $data->city : $row['city'];
        $price = isset($data->price) ? $data->price : $row['price'];
        $mobile = isset($data->mobile) ? $data->mobile : $row['mobile'];

       $update_query = "UPDATE `travel` SET traveller = :traveller,image=:image,
        city = :city, price = :price,mobile=:mobile
        WHERE id = :id";

        $update_stmt = $conn->prepare($update_query);

        $update_stmt->bindValue(':traveller', htmlspecialchars(strip_tags($traveller)), PDO::PARAM_STR);
        $update_stmt->bindValue(':image', htmlspecialchars(strip_tags($image)), PDO::PARAM_STR);
        $update_stmt->bindValue(':city', htmlspecialchars(strip_tags($city)), PDO::PARAM_STR);
        $update_stmt->bindValue(':price', htmlspecialchars(strip_tags($price)), PDO::PARAM_STR);
        $update_stmt->bindValue(':mobile', htmlspecialchars(strip_tags($mobile)), PDO::PARAM_STR);
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