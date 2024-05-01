<?php

$host = $_ENV['DB_HOST'];
$dbname = $_ENV['DB_TABLE'];
$user = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];

phpinfo();

try {

    // Criar uma conexão PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    
    // if($pdo){
    //     echo "Conectado ao banco de dados MYSQL com sucesso! ";
    // }

} catch (PDOException $e) {
    // Se ocorrer um erro na conexão, ele será exibido aqui
    echo 'Encontramos um erro na conexão!! <br>';
    echo $e->getMessage();
}
