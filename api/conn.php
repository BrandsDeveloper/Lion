<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$host = $_ENV['DB_HOST'];
$port = $_ENV['DB_PORT'];
$dbname = $_ENV['DB_TABLE'];
$user = $_ENV['DB_USER'];
$password = 102030;

try {

    if(isset($_GET['homolog'])) {

        // Criar uma conexão PDO
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $password);
        var_dump($pdo);
        
        if($pdo){
            echo "Conectado ao banco de dados MYSQL com sucesso!";
        }
    } else{

        exit();
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $password);
        
        if($pdo){
            echo "Conectado ao banco de dados MYSQL com sucesso!";
        }
    }

} catch (PDOException $e) {
    // Se ocorrer um erro na conexão, ele será exibido aqui
    echo 'Encontramos um erro na conexão!! <br>';
    echo $e->getMessage();
}
