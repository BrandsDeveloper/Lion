<?php

//Acessao via MYSQL

// $host = $_ENV['DB_HOST'];
// $db = $_ENV['DB_TABLE'];
// $user = $_ENV['DB_USER'];
// $pass = $_ENV['DB_PASS'];

// $conn = new mysqli($host, $user, $pass, $db);

// if ($conn->connect_error) {
//     die("Erro de conexão: " . $conn->connect_error);
// } else {
//     echo "Conexão bem-sucedida";
// }

phpinfo();

//Acessao via PDO POSTGRES

// $host =  $_ENV['NEON_HOST'];
// $port = $_ENV['NEON_PORT'];
// $dbname =  $_ENV['NEON_DATABASE'];
// $user =  $_ENV['NEON_USER'];
// $password =  $_ENV['NEON_PASSWORD'];

// $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password";

// var_dump($dsn);

// try {
//     // Criar uma conexão PDO
//     $pdo = new PDO($dsn);

//     $pdo

//     if($pdo){
//         echo "Conectado ao banco de dados PostgreSQL com sucesso!";
//     }

// } catch (PDOException $e) {
//     // Se ocorrer um erro na conexão, ele será exibido aqui
//     echo $e->getMessage();
// }
