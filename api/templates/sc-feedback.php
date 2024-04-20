<section class="sc-container" id="feedback">
    <div class="border-animate w-100"> </div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg">
                <div class="d-flex flex-column h-100 align-items-start justify-content-center ">
                    <p class="py-1 px-4 rounded-5 border border-1 border-primary text-primary mb-5"> Feedback </p>
                    <h1 class="fw-light mb-0">Além das <span class="h1 text-primary fw-light">telas! </span> </h1>
                    <p class="opacity-50 fw-lighter">Cada experiência se torna única a cada arte</p>

                    <!-- Demo styles -->
                    <style>
                        html,
                        body {
                        position: relative;
                        height: 100%;
                        }

                        body {
                        background: #eee;
                        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                        font-size: 14px;
                        color: #000;
                        margin: 0;
                        padding: 0;
                        }

                        .swiper {
                        width: 100%;
                        height: 100%;
                        }

                        .swiper-slide {
                        text-align: center;
                        font-size: 18px;
                        background: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        }

                        .swiper-slide img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        }
                    </style>
                    
                    <div class="swiper testemunho">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="p-4 rounded-5 border border-light">
                                    <div class="row">
                                        <div class="col-auto"> <img src="" class="rounded-5" alt=""> </div>
                                        <div class="col">
                                            <p class="fs-3 text-white">Victor Bronzer</p>
                                            <p class="ps-4"> Diretor criativo de <span class="text-primary">Paraglider Game</span> </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum itaque perferendis explicabo saepe ratione culpa facilis, asperiores suscipit voluptate unde molestiae soluta rerum vitae praesentium odit, dignissimos accusantium sequi fugit? </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
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
    var swiper = new Swiper(".testemunho", {
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
</script>