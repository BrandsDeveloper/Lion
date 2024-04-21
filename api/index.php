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



$host = $_ENV['DB_HOST'];
$port = $_ENV['DB_PORT'];
$dbname = $_ENV['DB_TABLE'];
$user = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];

// $conn = "pgsql:port=$port;dbname=$dbname;user=$user;password=$password;host=$host;";

echo "mysql:host=$host;port=$port;dbname=$dbname", $user, $password;

include ('footer.php'); 

?>