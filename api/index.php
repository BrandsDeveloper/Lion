<?php
/**
 * Template Name: Index
 * @package liontheme
 * @source project-lion
 * 
**/

phpinfo();

include ('header.php');

echo '<main>';
include ('templates/sc-home.php');
include ('templates/sc-sobre.php');
include ('templates/sc-jornada.php');
include ('templates/sc-servicos.php');
include ('templates/sc-programas.php');
include ('templates/sc-portfolio.php');
include ('templates/sc-feedback.php');
include ('templates/sc-contato.php');
echo '</main>';

include ('footer.php'); 

?>