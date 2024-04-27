<?php

phpinfo();
var_dump($GITHUB_ENV);

$host = $_ENV['DB_HOST'];
$port = $_ENV['DB_PORT'];
$dbname = $_ENV['DB_TABLE'];
$user = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];

// try {

//     // Criar uma conexão PDO
//     $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $password);
    
//     if($pdo){
//         echo "Conectado ao banco de dados MYSQL com sucesso! ";
//     }

// } catch (PDOException $e) {
//     // Se ocorrer um erro na conexão, ele será exibido aqui
//     echo 'Encontramos um erro na conexão!! <br>';
//     echo $e->getMessage();
// }
