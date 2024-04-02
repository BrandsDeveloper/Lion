
let url = document.querySelector('head').getAttribute('data-url');

let contato = document.querySelector('.form-contato');
let caminho = contato.getAttribute('data-action');
let btn = contato.querySelector('button[type="submit"]')

btn.addEventListener('click', () =>{

    let ajax = XMLHttpRequest();
   
    ajax.open('POST', url+caminho);
    ajax.send();
    
});