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
    SCROLL MENU E SCROLL SECTIONS
====================================== */

let isScrolling = false;

  // Função de rolagem suave
  function scrollDown(targetId, duration) {
    if (isScrolling) return; // Não inicia uma nova rolagem se já estiver rolando
    isScrolling = true;
    var to = document.getElementById(targetId);
    var to_position = to.getBoundingClientRect().top + window.scrollTop;
    var start_position = window.scrollTop;
    var distance_to_position = to_position - start_position;
    var start = null;

    function step(timestamp) {
      var progress;
      if (start === null) start = timestamp;
      progress = timestamp - start;
      window.scrollTo(0, smooth(progress, start_position, distance_to_position, duration));
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        isScrolling = false; // Resseta a flag quando a animação termina
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

  // Evento de tirar link da URL mas manter funçao de Scroll ao clicar no 
  let linksMenu = document.querySelectorAll('nav a[data-target]');
  linksMenu.forEach(link => {

    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      scrollDown(targetId, 200);
    });

  });

  // Seletor para todas as seções do seu site
  const sections = document.querySelectorAll('.section-custom');

  // Verifica qual seção está visível na tela
  function getCurrentSection() {
      const scrollPosition = window.scrollTop;

      for (const section of sections) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Verifica se a seção está visível na tela
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              return section.id;
          }
      }

      return null;
  }

  // Muda o atributo sempre que a seção estiver na tela
  window.addEventListener('scroll', () => {
    let currentSection = document.querySelector('div[data-current-section]');
    currentSection.setAttribute('data-current-section', getCurrentSection());
  });

  // // Função para tratar o evento de roda do mouse
  // function handleWheelEvent(e) {
    
  //   let currentSection = document.querySelector('div[data-current-section]');
  //   var delta = e.deltaY || e.detail || e.wheelDelta;
  //   if (delta < 0) {
  //     currentSection.getAttribute('data-current-section').scrollIntoView({ behavior: "smooth" });
  //   } else {
  //     currentSection.getAttribute('data-current-section').scrollIntoView({ behavior: "smooth" });
  //   }

  // }

  // setTimeout(() => {
    
  //   document.addEventListener('scroll', handleWheelEvent);

  // }, 1000);


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


  