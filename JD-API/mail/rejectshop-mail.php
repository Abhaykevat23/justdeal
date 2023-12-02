<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();

$user=$_GET['user'];
$id=$_GET['shopuser'];

    $sql ="SELECT user FROM `permission` WHERE id='$id'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $data = null;
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

$to=$user;
$sub="Your Shop Rejection Mail";
$mes="<h1 style='textalign:center;color:red;font-weight:500;'> Sorry Sir </h1><br>
    <h2>Your shop Request is rejected due to some Inapropriate data , <u>Please Reupload Shop </u> </h2>";

$from="FROM:abhaykevat23@gmail.com"."\r\n";
$from.="MIME-Version:1.0"."\r\n";
$from.="CC:abhaykevat23@gmail.com"."\r\n";
$from.="BCC:$data"."\r\n";
$from.="Content-Type:text/html;charset=UTF-8" . "\r\b";

if(mail($to,$sub,$mes,$from)){
    echo json_encode(["Message Sended To Your Email "]);
}


?>