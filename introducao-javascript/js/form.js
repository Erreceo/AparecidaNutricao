var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        
        exibeMensagensDeErro(erros);
        
        return;
    }

    var pacienteTR = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTR);

    form.reset();
    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";
});

function obtemPacienteDoFormulario( form ){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTR(paciente){

    var pacienteTR = document.createElement("tr");
    
    pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc, "info-imc"));

    pacienteTR.classList.add("paciente");
    
    return pacienteTR;

}

function montaTD( dado, classe ){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente( paciente ){

    var erros = [];

    if ( !validaPeso(paciente.peso) ) {
       erros.push("Peso inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    if ( paciente.nome.length == 0 ){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    
    return erros;
}

function exibeMensagensDeErro (erros) {

    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach( function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("mensagem-erro");
        ul.appendChild(li);
    });


}