window.onload = function() {

    /* ======================================
        MASCARA DE TELEFONE
    ====================================== */

    let tel = document.querySelector('input#tel');

    tel.addEventListener('keypress', mask);
    tel.addEventListener('blur', mask);
    
    function mask() {

        setTimeout(function() {
            var v = mphone(tel.value);
            if (v != tel.value) {
                tel.value = v;
            }
        }, 1);
    }

    function mphone(v) {
        var r = v.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 10) {
          r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 5) {
          r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
          r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
          r = r.replace(/^(\d*)/, "($1");
        }
        return r;
    }

    /* ======================================
        MASCARA DE DINHEIRO
    ====================================== */

    let money = document.querySelector('input#orcamento');

    money.addEventListener('keypress', moneyMask);
    money.addEventListener('blur', moneyMask);
    
    function moneyMask() {

        setTimeout(function() {
            var v = mmoney(money.value);
            if (v != money.value) {
                money.value = v;
            }
        }, 1);
    }

    function mmoney(v) {

        var r = v.replace(/\D/g, "");
        r = r.replace(/^0/, "");

        switch (r.length) {
            case 3:
                r = r.replace(/^(\d)(\d{2})/, "R$ $1,$2");
                break;
            case 4:
                r = r.replace(/^(\d{2})(\d{2})/, "R$ $1,$2");
                break;
            case 5:
                r = r.replace(/^(\d{3})(\d{2})/, "R$ $1,$2");
                break;
            case 6:
                r = r.replace(/^(\d)(\d{3})(\d{2})/, "R$ $1.$2,$3");
                break;
            case 7:
                r = r.replace(/^(\d{2})(\d{3})(\d{2})/, "R$ $1.$2,$3");
                break;
            case 8:
                r = r.replace(/^(\d{3})(\d{3})(\d{2})/, "R$ $1.$2,$3");
                break;
            case 9:
                r = r.replace(/^(\d)(\d{3})(\d{3})(\d{2})/, "R$ $1.$2.$3,$4");
                break;
        
            default:
                r = r.replace(/^(\d*)/, "R$ 0,$1");
                break;
        }

        return r;
    }

    /* ======================================
        ESCONDER MENU
    ====================================== */

    // let menu = document.querySelector('.header-default .menu');
    // let content = document.querySelector('.start-wrapper');

    // content.onscroll = function() {
    //     if (content.scrollTop > 150) {
    //         menu.classList.add('opacity-0');
    //     } else {
    //         menu.classList.remove('opacity-0');
    //     }
    // };

    /* ======================================
        MOUSE MAGNECT IMG PROG
    ====================================== */

    let imageProg = document.querySelectorAll(".prog img");

    imageProg.forEach( (image) => {

        image.addEventListener('mousemove', (e) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let moveX = (x - 100/2);
            let moveY = (y - 100/2);

            image.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        })

        image.addEventListener('mouseout', (e) => {
            image.style.transform = '';
        })
    })

    /* ======================================
        AJUSTE TAMANHO DO CONTAINER PARTICLES
    ====================================== */

    setInterval( () => {
        
        let wrapper = document.querySelector('.start-wrapper');
        let particle = document.querySelector('#container-particle');
        
        let height = wrapper.clientHeight;
        particle.style.height = `${height}px`;

    }, 1000);

    /* ======================================
        SWIPER
    ====================================== */

   new Swiper(".depoimento", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /* ======================================
        Item menu troca de cor se a seção estiver na tela
    ====================================== */

    // Evento de tirar link da URL mas manter funçao de Scroll ao clicar no 
    let linksMenu = document.querySelectorAll('nav a[data-target]');
    linksMenu.forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });

    });


    const sections = document.querySelectorAll('.sc-container');

    // Verifica qual seção está visível na tela
    function getCurrentSection() {
        const scrollPosition = window.scrollY;

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Verifica se a seção está visível na tela
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return section.id;
            }
        }

        // Se nenhuma seção estiver visível, retorne null
        return null;
    }

    // Muda o atrubuto sempre que a seção estiver na tela e ativa o current no menu
    window.addEventListener('scroll', () => {

        let section = document.querySelector('div[data-current-section]');
        let Links = document.querySelectorAll('a[data-target]');
        section.setAttribute('data-current-section', getCurrentSection());

        for ( const link of Links) {

            if( section.getAttribute('data-current-section') == link.getAttribute('data-target')) {
                link.classList.add('current');
            }else{
                link.classList.remove('current');
            }
        }

    });

    /* ======================================
        AJAX ENVIO DE FORMS
    ====================================== */

    // let url = document.querySelector('head').getAttribute('data-url');
    let url = window.location.href;
    let caminho = document.querySelector('.form-contato').getAttribute('data-action');
    let btn = document.querySelector('.form-contato button');

    let load = document.querySelector('#load');
    let result = document.querySelector('#result');
    
    btn.addEventListener('click', function(e) {
        
        e.preventDefault();
        
        load.classList.remove('d-none');
        let nome = document.querySelector('input#nome').value;
        let email = document.querySelector('input#email').value;
        let telefone = document.querySelector('input#tel').value;
        let valor = document.querySelector('input#orcamento').value;
        let projeto = document.querySelector('input#projeto').value;
        let post = 'nome='+nome+'&email='+email+'&tel='+telefone+'&orcamento='+valor+'&projeto='+projeto;
        
        let ajax = new XMLHttpRequest();
        ajax.open('POST', url+caminho+'.php', true);
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
        ajax.onreadystatechange = () =>{
            if( ajax.readyState == 4 && ajax.status == 200 && ajax.responseText['status'] == 'sucesso' ){
                
                load.classList.add('d-none');
                result.innerHTML = "Informações inseridas com sucesso!!";
                setTimeout( () => {
                    result.innerHTML = "";
                }, 5000);

                console.log('DEU CERTO!!');
                
            } else if( ajax.readyState == 4 || ajax.status == 405 ){
                
                load.classList.add('d-none');
                let response = JSON.parse(ajax.responseText);
                result.innerHTML = response.error;
                
            } else if( ajax.readyState == 4 && ajax.status == 400 ){
                console.log('DEU CERTO NO SERVIDOR, MAS DEU ERRO 404 !!');
            }
        }

        ajax.send(post);
        
        console.log(ajax);

    });

}