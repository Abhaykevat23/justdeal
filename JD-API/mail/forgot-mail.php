<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$email=$_GET['user'];
$pass=$_GET['password'];
$to=$email;
$sub="Your JustDeal Password ..";
$mes="<h2> Your JustDeal password  : <u> ".$pass."</u> </h2>";

$from="FROM:abhaykevat23@gmail.com"."\r\n";
$from.="MIME-Version:1.0"."\r\n";            
$from.="CC:abhaykevat23@gmail.com"."\r\n";
$from.="Content-Type:text/html;charset=UTF-8" . "\r\b";

mail($to,$sub,$mes,$from);

echo json_encode(["Message Sended To Your Email"]);

?>