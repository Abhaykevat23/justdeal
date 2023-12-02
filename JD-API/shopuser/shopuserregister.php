<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
// $sub = mysqli_real_escape_string($mysqli, trim($request->sub));
// 'sub' => $sub,
// ,sub=-----------,'$sub'----------
$sql = "INSERT INTO shopuser(name,password,email) VALUES ('$name','$password','$email')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'password' => '',
'email' => $email,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>