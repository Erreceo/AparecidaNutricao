var campoDeFiltro = document.querySelector("#filtrar-tabela");

campoDeFiltro.addEventListener("input", function(){
    var filtro = this.value;

    if ( filtro.length > 0 ){

        var pacientes = document.querySelectorAll(".paciente");

        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(filtro, "i")
        
            if ( !expressao.test(nome) ){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }

        });
    }else{
        var pacientes = document.querySelectorAll(".paciente");

        pacientes.forEach(function(paciente){
                paciente.classList.remove("invisivel");
        });
    }
})