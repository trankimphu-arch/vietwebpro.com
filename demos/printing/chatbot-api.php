<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die('{"error":"POST only"}');
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || !isset($input['messages'])) {
    die('{"error":"bad request"}');
}

$sys = array('role' => 'user', 'content' => 'Ban la PrintBot tro ly AI cua PrintPlus in an Bien Hoa Dong Nai. Dia chi 123 Nguyen Ai Quoc. Hotline 0909123456. Gia namecard 200 tam 500K, to roi A4 1500d, brochure 3000d, catalogue 25K, banner 80K/m2. Tra loi tieng Viet ngan gon.');
$msgs = array_merge(array($sys), $input['messages']);

$data = json_encode(array(
    'model' => 'stepfun/step-3.5-flash:free',
    'messages' => $msgs,
    'max_tokens' => 500
));

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://openrouter.ai/api/v1/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: Bearer YOUR_OPENROUTER_KEY_HERE'
));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 300);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo '{"error":"' . curl_error($ch) . '"}';
} else {
    echo $result;
}
curl_close($ch);
