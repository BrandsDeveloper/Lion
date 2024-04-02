const { Button } = require("bootstrap");

let url = document.querySelector('head').getAttribute('data-url');

console.log(url);

let contato = document.querySelector('.form-contato');
console.log(contato);
let caminho = contato.getAttribute('data-action');
console.log(caminho);
let btn = contato.querySelector('button[type="submit"]')
console.log(btn);

btn.addEventListener('click', () =>{

   let ajax = XMLHttpRequest();
   
   ajax.open('POST', url+caminho);
    
    
});