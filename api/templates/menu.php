<?php
    $args = array(
        'sobre' => 'Sobre',
        'jornada' => 'Jornada',
        'serviços' => 'Serviços',
        'programas' => 'Programas',
        'portfólio' => 'Portfólio',
        'feedback' => 'Feedback',
        'contato' => 'Contato'
    );
?>

<ul>
    <?php 
    foreach ($args as $link => $title) :
        echo '<li> <a href="#'.$link.'" > '.$title.' </a> </li>';
    endforeach; 
    ?>
</ul>