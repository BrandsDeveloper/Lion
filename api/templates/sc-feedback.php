<section class="sc-container" id="feedback">
    <div class="border-animate w-100"> </div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-7 col-xxl-8">
                <div class="d-flex flex-column h-100 align-items-start justify-content-center">
                    <p class="py-1 px-4 rounded-5 border border-1 border-primary text-primary mb-5"> Feedback </p>
                    <h1 class="fw-light mb-0">Além das <span class="h1 text-primary fw-light">telas! </span> </h1>
                    <p class="opacity-50 fw-lighter">Cada experiência se torna única a cada arte</p>
                    
                    <div class="position-relative w-100">
                        <div class="swiper depoimento">
                            <div class="swiper-wrapper">
                                <?php for ($i=0; $i < 3; $i++) : ?>
                                <div class="swiper-slide pe-5">
                                    <div class="p-4 rounded-5 border border-light c-card-depoimento">
                                        <div class="row mb-4">
                                            <div class="col-auto"> <img src="<?= $url; ?>/img/image-sem-filtro.png" class="c-card-depoimento__image" alt=""> </div>
                                            <div class="col">
                                                <h3 class="text-white m-0">Victor Bronzer</h3>
                                                <p class="ps-4 small c-card-depoimento__bar"> Diretor criativo de <span class="text-primary">Paraglider Game</span> </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="small opacity-50"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum itaque perferendis explicabo saepe ratione culpa facilis, asperiores suscipit voluptate unde molestiae soluta rerum vitae praesentium odit, dignissimos accusantium sequi fugit? </p>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <p class="small"> Veja o <span class="text-primary">projeto de Victor!</span> </p>
                                            <div>
                                                <p class="small opacity-50 m-0">Incrível</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php endfor; ?>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="d-none d-xl-block col-lg-auto opacity-50">
                <?php include 'card.php'; ?>
            </div>
        </div>
    </div>
</section>

<script>
    window.onload = function() {
        var swiper = new Swiper(".depoimento", {
            pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        });
    }
</script>
