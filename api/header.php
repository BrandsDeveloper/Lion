<?php
/**
 * Template Name: Header
 * @package liontheme
 * @source project-lion
 * 
**/

$url = $_SERVER["REQUEST_SCHEME"].'://'.$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Lion </title>

    <script src="https://kit.fontawesome.com/498943cfa9.js" crossorigin="anonymous"></script>

    <!-- Css Theme 
    ============================================ -->
    <link rel="stylesheet" href="css/theme.min.css">

</head>
<body>

<!-- Start Wrapper
============================================ -->
<div class="start-wrapper">

<!--  Start Header
============================================ -->
<header class="header-default">
    <nav class="menu-fixed d-none d-lg-block">
        <?php include 'templates/menu.php'; ?>
    </nav>

    <div class="container py-5">

        <nav class="menu">
            <div class="row align-items-center">
                <div class="col-lg-auto">
                    <a href="<?= $url; ?>" title="" class="link-primary text-decoration-none"> Home </a>
                </div>
                <div class="col-lg-auto mx-auto d-none d-lg-block">
                    <?php include 'templates/menu.php'; ?>
                </div>
                <div class="col-lg-auto">
                    <i class="fa-solid fa-magnifying-glass fs-4"></i>
                </div>
            </div>
        </nav>
    </div>

</header>
<!-- End Header -->
