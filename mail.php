<?php 
$recepient = "sunliveua@gmail.com";
$sitename = "Site name";

$name = trim($_POST["name"]);
$number = trim($_POST["number"]);
$company = trim($_POST["company"]);
$email = trim($_POST["email"]);
$message = "Name: $name \n Phone: $number \n Text: $company";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $sitename");

mail($recepient,$email);


 ?>