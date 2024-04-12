/* ======================================
    ESCONDER MENU
====================================== */

let menu = document.querySelector('.header-default .menu');
let content = document.querySelector('.start-wrapper');

content.onscroll = function() {
    if (content.scrollTop > 150) {
        menu.classList.add('opacity-0');
    } else {
        menu.classList.remove('opacity-0');
    }
};

/* ======================================
    AJAX ENVIO DE FORMS
====================================== */
let url = document.querySelector('head').getAttribute('data-url');

let contato = document.querySelector('.form-contato');
let caminho = contato.getAttribute('data-action');
let btn = contato.querySelector('button[type="button"]');
let load = document.querySelector('#load');
let result = document.querySelector('#result');

btn.addEventListener('click', () =>{

    let ajax = new XMLHttpRequest();

    load.classList.remove('d-none');
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let tel = document.querySelector('#tel').value
    let valor = document.querySelector('#orcamento').value
    let projeto = document.querySelector('#projeto').value
    
    let post = 'nome='+nome+'&email='+email+'&tel='+tel+'&orcamento='+valor+'&projeto='+projeto;
    
    ajax.open('POST', url+caminho, true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    ajax.onreadystatechange = () =>{
        if( ajax.readyState == 4 && ajax.status == 200 && ajax.responseText == 'Inserido' ){
            
            load.classList.add('d-none');
            result.innerHTML = "Informações inseridas com sucesso!!";
            setTimeout( () => {

                result.innerHTML = "";
                
            }, 5000);

            console.log('DEU CERTO!!');
            
        } else if( ajax.status == 405 || ajax.readyState == 4 ){
            
            load.classList.add('d-none');
            let response = JSON.parse(ajax.responseText);
            console.log(response);
            result.innerHTML = response.error;
            
        } else if( ajax.readyState == 4 && ajax.status == 400 ){
            
            console.log('DEU CERTO NO SERVIDOR, MAS DEU ERRO 404 !!');
            
        }
    }

    ajax.send(post);
    
    console.log(ajax);

});

    // Função de rolagem suave
    function scrollDown(to, duration) {
        var to = document.getElementById(to);
        var to_position = to.getBoundingClientRect().top;
        var start_position = window.pageYOffset;
        var distance_to_position = start_position - to_position;
        var start = null;
    
        function step(timestamp) {
        var progress;
        if (start === null) start = timestamp;
        progress = timestamp - start;
        window.scrollTo(0, smooth(progress, start_position, distance_to_position, duration));
        if (progress < 2000) {
            requestAnimationFrame(step);
        }
        }
    
        function smooth(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
        }
    
        requestAnimationFrame(step);
    }
  
    // Event listener para links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('data-target');
        scrollDown(targetId, 2000);
        });
    });
  
    // Função para tratar o evento de roda do mouse
    function handleWheelEvent(e) {
        // Descobrir a direção do scroll
        var delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta < 0) {
        // Scroll para cima
        console.log("Scrolling up");
        // Implementar a lógica para determinar o alvo da rolagem para cima
        } else {
        // Scroll para baixo
        console.log("Scrolling down");
        // Implementar a lógica para determinar o alvo da rolagem para baixo
        }
    }
  
    // Adiciona o event listener para o evento de 'wheel'
    document.addEventListener('wheel', handleWheelEvent);
  