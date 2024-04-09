<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$valor = $_POST['orcamento'];
$projeto = $_POST['projeto'];

function verificarVazio($post, $fieldName){

    if( empty($post[$fieldName]) ) {

        echo json_encode( array(
            'status' => "400",
            'error' => "Preencha o campo corretamente!",
        ));
        exit;
    }
}

verificarVazio($nome, 'nome');
verificarVazio($email, 'email');
verificarVazio($tel, 'telefone');
verificarVazio($valor, 'valor');
verificarVazio($projeto, 'projeto');

include __DIR__ . '/conn.php';

try {

    $stmt = $pdo->prepare('INSERT INTO lion_contato (
        nome,
        email,
        tel,
        valor,
        projeto
    ) VALUES (
        :nome,
        :email,
        :tel,
        :valor,
        :projeto
    )');

    $stmt->execute( array(
        ':nome' => $nome ,
        ':email' => $email,
        ':tel' => $tel,
        ':valor' => $valor, 
        ':projeto' => $projeto, 
    ));

    echo 'Inserido';
    
} catch (PDOException $e) {

    echo '<br> Deu Errado! Veja abaixo o motivo: <br>'.$e->getMessage();
    
}