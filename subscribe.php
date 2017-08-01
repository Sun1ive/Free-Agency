<?php 

$recepient = "sunliveua@gmail.com";
$sitename = "Site name";


$email = trim($_POST["email"]);


$pagetitle = "Подписка на \"$sitename\" от \"$email\" ";

mail($recepient, $pagetitle, $email, "Content-type: text/plain; charset=\"utf-8\"\n From: $sitename");
 ?>