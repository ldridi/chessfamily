
<?php
$url = "http://chessfamily.net/api/query";

$data = array(
  'authentication' => 'chessfemily',
  'action' => 'event_add',
  'announcer_id' => 4,
  'type_id'=>1,
  'meeting_placeid'=>1,
  'organizer'=>'dridi lotfi',
  'start_date'=>'2015/12/01',
  'end_date'=>'2015/12/31',
  'is_rated'=>1,
  'description'=>'test de dridi lotfi',
  'prize_fund'=>'nothing',
  'phone_number'=>'000',
  'email'=>'lotfi.dev@gmail.com',
  'website'=>'website.com'
);

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
echo json_encode($response,JSON_PRETTY_PRINT);
?>
