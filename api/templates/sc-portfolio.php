<section class="sc-container" id="portfolio">
    <div class="border-animate w-100"> </div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-7">
                <div class="d-flex flex-column h-100 align-items-start justify-content-center ">
                    <p class="py-1 px-4 rounded-5 border border-1 border-primary text-primary mb-5"> Portfólio </p>
                    <h1 class="fw-light mb-0">Meus melhores <span class="h1 text-primary fw-light">projetos! </span> </h1>
                    <p class="opacity-50 fw-lighter">Esses são as minhas melhores versões para você</p>

                    <div class="col-lg-7">
                        <div class="row gy-4">
                            <a href="<?= $url; ?>/img/project_01.png" data-toggle="lightbox" data-gallery="example-gallery" class="c-card-project rounded-5 col-md-6">
                                <img src="<?= $url; ?>/img/project_01.png" alt="project_01" class="c-card-project__image">
                            </a>
                            <a href="<?= $url; ?>/img/project_02.png" data-toggle="lightbox" data-gallery="example-gallery" class="c-card-project rounded-5 col-md-6">
                                <img src="<?= $url; ?>/img/project_02.png" alt="project_02" class="c-card-project__image">
                            </a>
                            <a href="<?= $url; ?>/img/project_03.png" data-toggle="lightbox" data-gallery="example-gallery" class="c-card-project rounded-5 col-12">
                                <img src="<?= $url; ?>/img/project_03.png" alt="project_03" class="c-card-project__image">
                            </a>
                        </div>
                        <div class="row d-none">
                            <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid">
                            </a>
                            <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid">
                            </a>
                            <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid">
                            </a>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-lg-auto opacity-50">
                <?php include 'card.php'; ?>
            </div>
        </div>
    </div>
</section>