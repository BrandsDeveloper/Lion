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
function scrollSmooth(targetId, duration) {
  if (isScrolling) return;
  isScrolling = true;

  const targetSection = document.getElementById(targetId);
  const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distanceToPosition = targetPosition - startPosition;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, smooth(progress, startPosition, distanceToPosition, duration));

    if (progress < duration) {
      requestAnimationFrame(step);
    } else {
      isScrolling = false;
    }
  }

  requestAnimationFrame(step);
}

function smooth(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

// Evento de clique nos links do menu para rolar suavemente para a seção correspondente
const linksMenu = document.querySelectorAll('nav a[data-target]');
linksMenu.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    scrollSmooth(targetId, 200);
  });
});

// Função para determinar qual seção está atualmente visível na tela
function getCurrentSection() {
  const scrollPosition = window.scrollY;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      return section.id;
    }
  }

  return null;
}

const sections = document.querySelectorAll('.section-custom');

// Evento de scroll para atualizar a seção atualmente visível
window.addEventListener('scroll', () => {
  const currentSection = document.querySelector('div[data-current-section]');
  currentSection.setAttribute('data-current-section', getCurrentSection());
});

// Função para rolar suavemente para a próxima seção
function scrollNextSection() {
  const currentSection = document.querySelector('div[data-current-section]');
  const currentSectionId = currentSection.getAttribute('data-current-section');
  const nextSectionId = getNextSectionId(currentSectionId);
  scrollSmooth(nextSectionId, 200);
}

// Função auxiliar para obter a próxima seção
function getNextSectionId(currentSectionId) {
  const currentSectionIndex = Array.from(sections).findIndex(section => section.id === currentSectionId);
  return sections[currentSectionIndex + 1] ? sections[currentSectionIndex + 1].id : currentSectionId;
}

// Evento de scroll para rolar suavemente para a próxima seção ao rolar para baixo
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  // Se estiver perto do final da página, não rolar para a próxima seção
  if (scrollPosition + windowHeight >= documentHeight - 100) return;

  // Se estiver rolando para baixo, role suavemente para a próxima seção
  if (!isScrolling && scrollPosition > lastScrollTop) {
    scrollNextSection();
  }
  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
});




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


  