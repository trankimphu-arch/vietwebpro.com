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

$sys = array('role' => 'user', 'content' => 'Ban la VietBot tro ly AI cua VietWebPro, dich vu thiet ke website chuyen nghiep. Dia chi Gia Lai, Viet Nam. Hotline 0394784396. Zalo 0394784396. Email info@vietwebpro.com. Website vietwebpro.com. Cac goi dich vu: Goi Co Ban tu 3 trieu (Landing page 1 trang, responsive, chuan SEO co ban, ban giao 5-7 ngay, ho tro 30 ngay), Goi Nang Cao tu 5 trieu (Website 3-5 trang, hieu ung dong, SEO nang cao, tich hop form/chat, ban giao 7-10 ngay, ho tro 90 ngay), Goi Premium tu 10 trieu (Website 5-10 trang, thiet ke rieng, Animation cao cap, Dashboard quan ly, SEO Pro, ban giao 10-15 ngay, ho tro 365 ngay). Cong nghe su dung: HTML5 CSS3 JavaScript React Vue.js Next.js. Tra loi tieng Viet ngan gon than thien.');
$msgs = array_merge(array($sys), $input['messages']);

$data = json_encode(array(
    'model' => 'if/kimi-k2-thinking',
    'messages' => $msgs,
    'max_tokens' => 500
));

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://localhost:20128/v1/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: Bearer sk-480d5cbb0b101aea-4h65rz-ef120388'
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
