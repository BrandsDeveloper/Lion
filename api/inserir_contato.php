<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$orcamento = $_POST['orcamento'];
$projeto = $_POST['projeto'];

include __DIR__ . '/conn.php';

try {

    $stmt = $pdo->prepare('INSERT INTO lion_contato (
        nome,
        email,
        tel,
        orcamento,
        projeto
    ) VALUES (
        :nome,
        :email,
        :tel,
        :orcamento,
        :projeto
    )');

    $stmt->execute( array(
        ':nome' => $nome ,
        ':email' => $email,
        ':tel' => $tel,
        ':orcamento' => $orcamento, 
        ':projeto' => $projeto, 
    ));

    echo 'Deu Certo!';
    
} catch (PDOException $e) {

    echo 'Deu Errado! Veja abaixo o motivo: <br>'.$e->getMessage();
    
}