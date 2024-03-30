<?php

//Acessao via MYSQL

// $conn = new mysqli($host, $user, $pass, $db);

// if ($conn->connect_error) {
//     die("Erro de conexão: " . $conn->connect_error);
// } else {
//     echo "Conexão bem-sucedida";
// }

//Acessao via PDO POSTGRES

// $host =  $_ENV['POSTGRES_HOST'];
// $port = $_ENV['POSTGRES_PORT'];
// $dbname =  $_ENV['POSTGRES_DATABASE'];
// $user =  $_ENV['POSTGRES_USER'];
// $password =  $_ENV['POSTGRES_PASSWORD'];

// $host =  $_ENV['NEON_HOST'];
// $port = $_ENV['NEON_PORT'];
// $dbname =  $_ENV['NEON_DB'];
// $user =  $_ENV['NEON_USER'];
// $password =  $_ENV['NEON_PASS'];

$host = $_ENV['DB_HOST'];
$dbname = $_ENV['DB_TABLE'];
$user = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];

// $conn = "pgsql:port=$port;dbname=$dbname;user=$user;password=$password;host=$host;";
$conn = "mysql:host=$host;mysql:dbname=$dbname; $user; $password;";

try {
    // Criar uma conexão PDO
    $pdo = new PDO($conn);

    $stmt = $pdo->prepare("SELECT DATABASE");

    $stmt->execute();

    if($pdo){
        // echo "Conectado ao banco de dados PostgreSQL com sucesso!";
        echo "Conectado ao banco de dados MYSQL com sucesso!";
    }

} catch (PDOException $e) {
    // Se ocorrer um erro na conexão, ele será exibido aqui
    echo 'Encontramos um erro na conexão!! <br>';
    echo $e->getMessage();
}
