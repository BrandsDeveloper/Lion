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

let wrapper = document.querySelector('.start-wrapper');
let particle = document.querySelector('#container-particle');

setTimeout(() => {
    
    let height = wrapper.clientHeight;
    particle.style.height = height;

}, 1000);


/* ======================================
    SCROLL MENU E SCROLL SECTIONS
====================================== */

let isScrolling = false;

// Função de rolagem suave
// function scrollDown(targetId, duration) {
//   if (isScrolling) return; // Não inicia uma nova rolagem se já estiver rolando
//   isScrolling = true;
//   var to = document.getElementById(targetId);
//   var to_position = to.getBoundingClientRect().top + window.pageYOffset;
//   var start_position = window.pageYOffset;
//   var distance_to_position = to_position - start_position;
//   var start = null;

//   function step(timestamp) {
//     var progress;
//     if (start === null) start = timestamp;
//     progress = timestamp - start;
//     window.scrollTo(0, smooth(progress, start_position, distance_to_position, duration));
//     if (progress < duration) {
//       requestAnimationFrame(step);
//     } else {
//       isScrolling = false; // Resseta a flag quando a animação termina
//     }
//   }

//   function smooth(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(step);
// }

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

// // Função para rolar suavemente para a próxima seção
// function scrollNextSection() {
//   const currentSection = document.querySelector('div[data-current-section]');
//   const currentSectionId = currentSection.getAttribute('data-current-section');
//   const nextSectionId = getNextSectionId(currentSectionId);
//   const nextSection = document.getElementById(nextSectionId);
//   if (nextSection) {
//     nextSection.scrollIntoView({ behavior: 'smooth' });
//     currentSection.setAttribute('data-current-section', nextSectionId);
//   }
// }

// // Função para rolar suavemente para a seção anterior
// function scrollPreviousSection() {
//   const currentSection = document.querySelector('div[data-current-section]');
//   const currentSectionId = currentSection.getAttribute('data-current-section');
//   const previousSectionId = getPreviousSectionId(currentSectionId);
//   const previousSection = document.getElementById(previousSectionId);
//   if (previousSection) {
//     previousSection.scrollIntoView({ behavior: 'smooth' });
//     currentSection.setAttribute('data-current-section', previousSectionId);
//   }
// }

// // Função para obter o ID da próxima seção
// function getNextSectionId(currentSectionId) {
//   const currentSectionIndex = Array.from(sections).findIndex(section => section.id === currentSectionId);
//   return sections[currentSectionIndex + 1] ? sections[currentSectionIndex + 1].id : currentSectionId;
// }

// // Função para obter o ID da seção anterior
// function getPreviousSectionId(currentSectionId) {
//   const currentSectionIndex = Array.from(sections).findIndex(section => section.id === currentSectionId);
//   return sections[currentSectionIndex - 1] ? sections[currentSectionIndex - 1].id : currentSectionId;
// }

// // Evento de scroll para rolar suavemente para a próxima seção ao rolar para baixo
// let lastScrollTop = 0;
// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;
//   const documentHeight = document.body.clientHeight;

//   // Se estiver perto do final da página, não rolar para a próxima seção
//   if (scrollPosition + windowHeight >= documentHeight - 100) return;

//   // Se estiver rolando para baixo, role suavemente para a próxima seção
//   if (scrollPosition > lastScrollTop) {
//     scrollNextSection();
//   } else {
//     scrollPreviousSection();
//   }
//   lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
// });



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

  


  