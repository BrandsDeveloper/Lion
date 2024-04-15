<?php
    $args = array(
        'sobre' => 'Sobre',
        'jornada' => 'Jornada',
        'servicos' => 'Serviços',
        'programas' => 'Programas',
        'portfolio' => 'Portfólio',
        'feedback' => 'Feedback',
        'contato' => 'Contato'
    );
?>

<ul>
    <?php 
    foreach ($args as $link => $title) :
        echo '<li> <a data-target="'.$link.'"> '.$title.' </a> </li>';
    endforeach; 
    ?>
</ul>