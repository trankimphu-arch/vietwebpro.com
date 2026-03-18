<?php
// PrintPlus Chatbot API Proxy
// Upload file này vào thư mục public_html trên hosting cPanel
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'POST only']);
    exit;
}

// OpenRouter API Key - an toàn vì nằm trên server
$API_KEY = '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';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['messages'])) {
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// System prompt cho PrintBot
$systemMsg = [
    'role' => 'system',
    'content' => 'Bạn là PrintBot - trợ lý AI của PrintPlus, công ty in ấn tại Biên Hòa, Đồng Nai. Địa chỉ: 123 Nguyễn Ái Quốc, P.Tân Hiệp. Hotline: 0909 123 456. Zalo: 0909 123 456. Giờ: T2-T7 7:30-18:00, CN 8:00-12:00. GIÁ: Namecard 200 tấm 500K, ép nhũ +100K, tờ rơi A4 1.500đ/tờ, brochure gấp 3 3.000đ/tờ, catalogue 25K/cuốn, banner/hiflex 80K/m², hộp giấy 3K/hộp (SL500+), túi giấy 5K/túi, combo DN 3.5 triệu. Dịch vụ: namecard, thiệp cưới, brochure, catalogue, bao bì, banner, standee, billboard, in áo/ly/USB, thiết kế logo. Trả lời tiếng Việt ngắn gọn 2-3 câu, dùng emoji, gợi ý gọi hotline/Zalo.'
];

// Thêm system prompt vào đầu messages
$messages = array_merge([$systemMsg], $data['messages']);

$ch = curl_init('https://openrouter.ai/api/v1/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $API_KEY,
        'HTTP-Referer: https://vietwebpro.com',
        'X-Title: PrintPlus Chatbot'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'google/gemma-3-27b-it:free',
        'messages' => $messages,
        'max_tokens' => 250,
        'temperature' => 0.7
    ]),
    CURLOPT_TIMEOUT => 30
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpCode);
echo $response;
