<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$city = trim($request->city);
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$sql = "INSERT INTO user(name,city,password,email) VALUES ('$name','$city','$password','$email')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'city' => $city,
'password' => '',
'email' => $email,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>