
let area= document.getElementById('quadro');
let cores = ['orange', 'red', 'yellow', 'blue',  'green'];
let click =0;

area.addEventListener('click', mudarCor);

function mudarCor() {
    click++

    if (click>=cores.length){
        click = 0;
        area.style.backgroundColor = cores[click];
    }else{
        area.style.backgroundColor = cores[click];
    } 
}


//let box = document.querySelector('.box');
//let colors = ['orange', 'red', 'yellow', 'blue', 'green'];
//let click = 0;

/*box.addEventListener('click', function(){
    click ++
    if(click >= colors.length ){
        click = 0
        box.style.backgroundColor = colors[click];
    }else{
        box.style.backgroundColor = colors[click];
    } 
    console.log(click)
})*/


