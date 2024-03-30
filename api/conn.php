<?php

$host = getenv('POSTGRES_HOST');
$db = getenv('POSTGRES_DATABASE');
$user = getenv('POSTGRES_USER');
$pass = getenv('POSTGRES_PASSWORD');
// $host = getenv('DB_HOST');
// $db = getenv('DB_TABLE');
// $user = getenv('DB_USER');
// $pass = getenv('DB_PASS');

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
} else {
    echo "Conexão bem-sucedida";
}
