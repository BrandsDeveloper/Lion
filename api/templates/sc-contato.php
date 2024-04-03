<section class="section-custom" id="contato">
    <div class="border-animate w-100"> </div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-7">
                <div class="d-flex flex-column h-100 align-items-start justify-content-center ">
                    <p class="py-1 px-4 rounded-5 border border-1 border-primary text-primary mb-4"> Contato </p>
                    <h1 class="fw-light mb-0">Vamos trabalhar <span class="h1 text-primary fw-light">juntos! </span> </h1>
                    <p class="opacity-50 fw-lighter">Me conta sua história, e acredite que ela possa ser real!</p>
                    <form data-action="/api/inserir_contato.php" method="POST" class="form-contato w-100 mt-4">

                        <div class="form-group mb-4">
                            <label for="nome">Qual seu nome?</label>
                            <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome Completo">
                        </div>

                        <div class="form-group mb-4">
                            <label for="email">Qual seu E-mail? </label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="exemplo@gmail.com">
                        </div>

                        <div class="form-group mb-4">
                            <label for="tel">Qual seu número? <span class="small opacity-25">(opcional)</span> </label>
                            <input type="text" class="form-control" name="tel" id="tel" placeholder="(xx) x xxxx-xxxx" maxlength="11">
                        </div>

                        <div class="form-group mb-4">
                            <label for="orcamento">Qual seu orçamento? <span class="small opacity-25">(opcional)</span></label>
                            <input type="text" class="form-control" name="orcamento" id="orcamento" placeholder="R$ x.xxx,xx">
                        </div>

                        <div class="form-group mb-4">
                            <label for="projeto">Qual seu projeto?</label>
                            <input type="text" class="form-control" name="projeto" id="projeto" placeholder="Detalhes do projeto">
                        </div>

                        <button type="button" class="btn btn-primary text-white fw-light text-uppercase mt-4 rounded-5 d-inline-block py-3"> <i class="fa-solid fa-envelope me-2"></i> Me mostre suas ideais!</button>
                    </form>
                </div>
            </div>
            <div class="col-lg-auto opacity-50">
                <?php include 'card.php'; ?>
            </div>
        </div>
    </div>
</section>