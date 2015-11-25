<?php
$url = "http://chessfamily.net/api/query";
$login = $_POST['login'];
$password = $_POST['pass'];
$data = array(
 'authentication' => 'chessfemily',
 'action' => 'member_connect',
 'email' => $login,
 'password' => $password,
);
$content = '';
foreach($data as $key=>$value) { $content .= $key.'='.$value.'&'; }

$curl = curl_init($url);


curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $content);

$json_response = curl_exec($curl);

$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

curl_close($curl);

$response = json_decode($json_response, true);
$login = $response['success'];

echo $login;
?>