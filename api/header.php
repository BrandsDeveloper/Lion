<?php
/**
 * Template Name: Header
 * @package liontheme
 * @source project-lion
 * 
**/

$url = 'https://'.$_SERVER["HTTP_HOST"];

?>

<!DOCTYPE html>
<html lang="pt-br">
<head data-url="<?= $url; ?>">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Lion - Project Design and Developer</title>

    <link rel="shortcut icon" href="<?= $url; ?>/img/pain.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/498943cfa9.js" crossorigin="anonymous"></script>

    <!-- Css Theme 
    ============================================ -->
    <link rel="stylesheet" href="<?= $url; ?>/css/theme.min.css">

</head>
<body>

<!-- Start Wrapper
============================================ -->
<div class="start-wrapper" data-current-section="home">  <!-- id="fullpage" -->

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
