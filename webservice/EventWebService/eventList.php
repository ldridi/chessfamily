
<?php
$url = "http://chessfamily.net/api/query";

$data = array(
  'authentication' => 'chessfemily',
  'action' => 'find_events',
  'distance' => 5,
  'latitude' => 35.6829986572,
  'longitude' => 10.8500003815,
  'event_type_id' => 2,
  'nb_days' => 5,
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
