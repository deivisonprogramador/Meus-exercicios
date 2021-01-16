
let res = document.querySelector('p');
let $button = document.querySelector('.btn');
let contagem =0;




$button.addEventListener('click', pegarNumero);

function pegarNumero () {
    let txtnum = document.querySelector('#txtnum');
    contagem = Number(txtnum.value);
    contar();
}



function contar(){

    if (contagem >0){
        contagem--

        res.innerHTML = contagem;
        setTimeout(contar,1000);

    }else{
        res.innerHTML = 'Fim'; 
    }
}




    



/*
if (contagem >0){
        contagem--

        res.innerHTML= contagem;
        setTimeout(contar,1000);
    } else {
        res.innerHTML = 'Fim';

=========================================
for (i=10; i>0; --i){
        res.innerHTML = i;
        
        }        
        */