
let url = document.querySelector('head').getAttribute('data-url');

let contato = document.querySelector('.form-contato');
let caminho = contato.getAttribute('data-action');
let btn = contato.querySelector('button[type="button"]')

btn.addEventListener('click', () =>{

    let ajax = new XMLHttpRequest();

    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let tel = document.querySelector('#tel').value
    let valor = document.querySelector('#orcamento').value
    let projeto = document.querySelector('#projeto').value

    let post = 'nome='+nome+'&email='+email+'&tel='+tel+'&orcamento='+valor+'&projeto='+projeto;
   
    ajax.open('POST', url+caminho, true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    ajax.onreadystatechange = () =>{
        if( ajax.readyState == 4 && ajax.status == 200 ){
            console.log('DEU CERTO!!');
        } else if( ajax.readyState == 4 && ajax.status == 404 ){
            console.log('DEU CERTO NO SERVIDOR, MAS DEU ERRO 404 !!');
        }
    }
    ajax.send(post)
    
    console.log(ajax);

});