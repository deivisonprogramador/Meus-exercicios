
let res = document.querySelector('p');
let $button = document.querySelector('.btn');
let contagem = 10;



$button.addEventListener('click', contar);



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

        */