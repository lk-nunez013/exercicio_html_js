const form = document.getElementById('form-validacao');




function  validaMaior(){
    let campoA = document.getElementById('campoA');
    let campo_A = Number(campoA.value)
    let campoB = document.getElementById('campoB');
    let campo_B = Number(campoB.value)
    
    
    if(campo_A > campo_B){
        document.querySelector('.errorMessage').style.display = 'block';
        document.querySelector('.sucessMessage').style.display = 'none';

    }else{
        document.querySelector('.sucessMessage').style.display = 'block';
        document.querySelector('.errorMessage').style.display = 'none';

        campoA.value = '';
        campoB.value = '';
}
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    validaMaior();
})



