<!-- Serviços
============================================ -->
<?php

$args = (object)[
    'modal01' => [ 
        'nome' => 'Design d/ Web Site',
        'descricao' => 'Idealizo e desenvolvo estéticas únicas para produtos e marcas digitais usando Figma e Frame.',
        'conteudo' => 'Transforme sua visão em realidade digital! Com minha experiência em design de sites, eu crio estéticas únicas e envolventes para produtos e marcas. Utilizando ferramentas como Figma e Frame, eu dou vida à sua identidade digital, garantindo que cada pixel conte uma história e atraia seu público-alvo.', 
    ],
    'modal02' => [
        'nome' => 'Desenvolvedor [dev]',
        'descricao' => 'Constuo Layouts únicos para site que vão ao ar com Framer Webflow ou WordPress.',
        'conteudo' => 'Dê vida às suas ideias com layouts exclusivos e funcionais! Como desenvolvedor, minha missão é construir sites que se destaquem. Seja utilizando Framer, Webflow ou WordPress, eu trabalho para criar uma experiência online que represente verdadeiramente sua marca, combinando design e funcionalidade de forma harmoniosa.',
    ],
    'modal03' => [
        'nome' => 'SEO/Marketing',
        'descricao' => 'Aumentando o tráfego do seu website com otimização de SEO.',
        'conteudo' => 'Faça seu site brilhar nos resultados de pesquisa! Com estratégias de SEO e marketing personalizadas, eu posso impulsionar o tráfego do seu website. Através da otimização de SEO, garantimos que seu site seja encontrado pelos clientes certos, na hora certa. Vamos juntos aumentar sua visibilidade online e alcançar seus objetivos de negócios.',
    ]
];

?>
<section class="sc-container" id="servicos">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg">
                <div class="d-flex flex-column h-100 align-items-start justify-content-center ">
                    <p class="py-1 px-4 rounded-5 border border-1 border-primary text-primary mb-5 mb-md-4 mb-xxl-5"> Serviços </p>
                    <div class="cards-servicos">

                        <?php foreach ($args as $key => $value) : ?>
                        <div class="rounded-50 border border-light p-4 pe-5 <?= ($key == 'modal02') ? 'my-4 ms-md-5' : ''; ?>">

                            <h2 class="fw-light"> <?= $value['nome']; ?></h2>
                            <p class="small opacity-50"> <?= $value['descricao']; ?> </p>
                            <button type="button" class="btn fw-lighter opacity-50 p-0 text-primary" data-bs-toggle="modal" data-bs-target="#<?= $key; ?>">  + Meus projetos </button>

                            <div class="modal fade" id="<?= $key; ?>" tabindex="-1" aria-labelledby="<?= $key; ?>Label" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5 text-primary" id="<?= $key; ?>Label"> <?= $value['nome']; ?></h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <?= $value['conteudo']; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <?php endforeach; ?>

                    </div>
                </div>
            </div>
            <div class="d-none d-xl-block col-lg-auto opacity-50">
                <?php include 'card.php'; ?>
            </div>
        </div>
    </div>
</section>

<!-- End Serviços -->