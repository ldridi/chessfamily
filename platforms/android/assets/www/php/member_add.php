
<?php

$url = "http://chessfamily.net/api/query";

$data = array(
  'authentication' => 'chessfemily',
  'action' => 'member_add',
  'name' => 'oussema',
  'os'=>'win7',
  'birthday'=>'01-04-90',
  'gender'=>'homme',
  'email'=>'nachmi.oussema@gmail.com',
  'password'=>'oussema',
  'facebook_id'=>'2222',
  'google_id'=>'8888',
  'residence_countryid'=>'Tunis',
  'residence_cityid'=>'11',
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

var_dump($response);

?>
