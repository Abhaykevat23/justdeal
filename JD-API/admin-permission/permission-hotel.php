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
$fake=htmlspecialchars(trim($data->image));
$image =str_replace('C:\fakepath','',$fake);

    $hotelname = htmlspecialchars(trim($data->hotelname));
    // $image = htmlspecialchars(trim($data->image));
    $shopfield = htmlspecialchars(trim($data->shopfield));
    $veg = htmlspecialchars(trim($data->veg));
    $address = htmlspecialchars(trim($data->address));
    $time = htmlspecialchars(trim($data->time));
    $city = htmlspecialchars(trim($data->city));
    $mobile = htmlspecialchars(trim($data->mobile));
    $user = htmlspecialchars(trim($data->user));
 
    $query = "INSERT INTO `permission`(
    hotelname,
    city,
    veg,
    image,
    mobile,
    shopfield,
    user,
    address,
    time
    ) 
    VALUES(
    :hotelname,
    :city,
    :veg,
    :image,
    :mobile,
    :shopfield,
    :user,
    :address,
    :time
    )";
 
 $stmt = $conn->prepare($query);
 
    $stmt->bindValue(':hotelname', $hotelname, PDO::PARAM_STR);
    $stmt->bindValue(':shopfield', $shopfield, PDO::PARAM_STR);
    $stmt->bindValue(':veg', $veg, PDO::PARAM_STR);
    $stmt->bindValue(':address', $address, PDO::PARAM_STR);
    $stmt->bindValue(':time', $time, PDO::PARAM_STR);
    $stmt->bindValue(':image', $image, PDO::PARAM_STR);
    $stmt->bindValue(':mobile', $mobile, PDO::PARAM_STR);
    $stmt->bindValue(':user', $user, PDO::PARAM_STR);
    $stmt->bindValue(':city', $city, PDO::PARAM_STR);
    
    
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data Inserted Successfully.'
        ]);
        exit;
    }
    
    echo json_encode([
        'success' => 0,
        'message' => 'There is some problem in data inserting'
    ]);
    exit;
