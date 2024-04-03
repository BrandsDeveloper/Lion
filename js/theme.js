
let url = document.querySelector('head').getAttribute('data-url');

let contato = document.querySelector('.form-contato');
let caminho = contato.getAttribute('data-action');
let btn = contato.querySelector('button[type="button"]')

btn.addEventListener('click', () =>{

    let ajax = new XMLHttpRequest();

    const params = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        tel: document.querySelector('#tel').value,
        valor: document.querySelector('#orcamento').value,
        projeto: document.querySelector('#projeto').value
    }
   
    ajax.open('POST', url+caminho);
    ajax.setRequestHeader('Content-type', 'application/json')

    ajax.onreadystatechange = () =>{
        if( ajax.readyState == 4 && ajax.status == 200 ){
            console.log('DEU CERTO!!');
        } else if( ajax.readyState == 4 && ajax.status == 404 ){
            console.log('DEU CERTO NO SERVIDOR, MAS DEU ERRO 404 !!');
        }
    }
    ajax.send(JSON.stringify(params)) // Make sure to stringify
    
    console.log(ajax);

});