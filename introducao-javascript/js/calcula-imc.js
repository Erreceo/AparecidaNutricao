var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for ( var i = 0; i < pacientes.length; i++ ){

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdImc = pacientes[i].querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc = tdImc.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        console.log("Peso inválido");
        tdPeso.textContent = "Peso Inválido";
        pacientes[i].classList.add("paciente-invalido");
    }

    if( !alturaValida ){
        console.log("Altura inválida");
        tdAltura.textContent = "Altura Inválida";
        pacientes[i].classList.add("paciente-invalido");
    }

    if ( pesoValido && alturaValida ) {
        tdImc.textContent = calculaImc(peso, altura);
    }else{
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = (peso / (altura*altura)).toFixed(2);

    return imc;
}

function validaPeso( peso ){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;            
    }
}

function validaAltura( altura ){
    
    if( altura > 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}