<?php
// Groq API Proxy - Tránh lỗi CORS từ trình duyệt
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'POST only']);
    exit;
}

$GROQ_KEY = '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';
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['messages'])) {
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

$ch = curl_init('https://api.groq.com/openai/v1/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $GROQ_KEY
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'llama-3.3-70b-versatile',
        'messages' => $data['messages'],
        'max_tokens' => 300,
        'temperature' => 0.7
    ])
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpCode);
echo $response;
