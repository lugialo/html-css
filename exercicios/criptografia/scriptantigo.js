var texto = document.getElementById('texto');

var numero = document.getElementById('chave');
var matriz = document.getElementById('matriz');
var submit = document.getElementById('submit');


// if ck_modo.checked = true then
//  chave:= strtoint(CB_chave.text) * (-1);
//  if ck_modo.checked = false then
//  chave:= strtoint(CB_chave.text);


function empty()
{
    alert('Os campos texto e matriz não podem estar vazios.');
    
}





window.onload = function(){
    var submit = document.getElementById('submit');
    let modo   = document.getElementById('modo');

    modo.checked = false;
    console.log('Criptografar ativo');
    submit.addEventListener("click", handler);
    modo.addEventListener("click", handler2);
    
}

function handler(){
    var texto = document.getElementById('texto');
    var matriz = document.getElementById('matriz');

    var texto2 = JSON.stringify(texto);
    var matriz2 = JSON.stringify(matriz);

    console.log('You clicked submit!');
    if (texto2 = '') or (matriz2 = '')
    {
        empty();
    }
    
}

function handler2(){
    if (modo.checked){
        console.log('Descriptografar ativo');
        }
    else{
        console.log('Criptografar ativo');
    }
}
