
var texto = document.getElementById('texto');
var modo = document.getElementById('modo');

var posicaoletra = 1;


window.onload = function(){

    modo.checked = false;
    modo.addEventListener("click", ativachave)
}

function submitfunction(){

    if (texto.value == "") {
        alert('O campo texto não pode ficar em branco.')
        return false
    } 
    
    if (modo.checked){
        chave = document.getElementById('chave');
        console.log('Descriptografar ativo');
    }
    else{
        console.log('Criptografar ativo');
    }


}