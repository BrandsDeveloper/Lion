<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$tel = addslashes($_POST['tel']);
$valor = addslashes($_POST['orcamento']);
$projeto = addslashes($_POST['projeto']);

function verificarVazio($post){

    if( empty($post) ) {

        http_response_code(405);
        echo json_encode( array(
            'status' => "405",
            'error' => "Preencha o campo corretamente!",
        ));
        exit;
    }
}

verificarVazio($nome);
verificarVazio($email);
verificarVazio($tel);
verificarVazio($valor);
verificarVazio($projeto);

include_once __DIR__ . '/conn.php';

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

    var_dump($stmt);

    echo json_encode( array(
        'status' => "sucesso",
    ));
    
} catch (PDOException $e) {

    echo '<br> Deu Errado! Veja abaixo o motivo: <br>'.$e->getMessage();
    
}