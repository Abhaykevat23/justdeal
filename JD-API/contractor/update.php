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

//print_r($data);

if (!isset($data->id)) {
    echo json_encode(['success' => 0, 'message' => 'Please enter correct Students id.']);
    exit;
}

try {

    $fetch_post = "SELECT * FROM `contractor` WHERE id=:id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $data->id, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :
        $fake=htmlspecialchars(trim($data->image));
        $image =str_replace('C:\fakepath','',$fake);
        
        $row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
        $field = isset($data->field) ? $data->field : $row['field'];
        // $image = isset($data->image) ? $data->image : $row['image'];
        $time = isset($data->time) ? $data->time : $row['time'];
        $contractorname = isset($data->contractorname) ? $data->contractorname : $row['contractorname'];
        $mobile = isset($data->mobile) ? $data->mobile : $row['mobile'];
        $address = isset($data->address) ? $data->address : $row['address'];
        $city = isset($data->city) ? $data->city : $row['city'];

       $update_query = "UPDATE `contractor` SET field = :field,image=:image,contractorname=:contractorname,mobile=:mobile,
        time = :time, address = :address,city= :city
        WHERE id = :id";

        $update_stmt = $conn->prepare($update_query);

        $update_stmt->bindValue(':field', htmlspecialchars(strip_tags($field)), PDO::PARAM_STR);
        $update_stmt->bindValue(':image', htmlspecialchars(strip_tags($image)), PDO::PARAM_STR);
        $update_stmt->bindValue(':time', htmlspecialchars(strip_tags($time)), PDO::PARAM_STR);
        $update_stmt->bindValue(':contractorname', htmlspecialchars(strip_tags($contractorname)), PDO::PARAM_STR);
        $update_stmt->bindValue(':mobile', htmlspecialchars(strip_tags($mobile)), PDO::PARAM_STR);
        $update_stmt->bindValue(':address', htmlspecialchars(strip_tags($address)), PDO::PARAM_STR);
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