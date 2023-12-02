<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$name=$_GET['name'];
$mobile=$_GET['mobile'];
$user=$_GET['user'];

// $to='abhaykevat23@gmail.com';    <a href=https://goo.gl/maps/gujarat/vapi >Address</a>
$to=$user;
$sub="JustDeal Booking Successfully";
$mes="Name :".$name." <br> <br><br> Mobile Number : " .$mobile ;
$mes.="
    <html>
        <br><br><br><br>
        <span style='display:flex;'>
            <p style='font-size:20px' >Call : <p>
            <a style='font-size:20px;border:2px solid gray;border-radios:10px;' href='tel:".$mobile."' > ".$name."</a>
        </span> 
        <br>
    </html>";

$from="FROM:abhaykevat23@gmail.com"."\r\n";
$from.="MIME-Version:1.0"."\r\n";
$from.="CC:abhaykevat23@gmail.com"."\r\n";
$from.="Content-Type:text/html;charset=UTF-8" . "\r\b";

mail($to,$sub,$mes,$from);

echo json_encode(["Message Sended To Your Email"]);

?>