var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

for ( var i = 0; i < pacientes.length; i++ ){

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdImc = pacientes[i].querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc = tdImc.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoValido = false;
        tdPeso.textContent = "Peso Inválido";
        pacientes[i].classList.add("paciente-invalido");
    }

    if( altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        alturaValida         = false;
        tdAltura.textContent = "Altura Inválida";
        pacientes[i].classList.add("paciente-invalido");
    }

    if ( pesoValido && alturaValida ) {
        tdImc.textContent = (peso/(altura*altura)).toFixed(2);
    }else{
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }
}

titulo.addEventListener("click", mostraMensagem);


function mostraMensagem (){
    console.log("Olá eu fui clicado");
}