var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        pacientes[i].querySelector(".info-imc").textContent = "PESO INVALIDO";
        pacientes[i].classList.add("paciente-invalido");
    }else if (!alturaValida){
        pacientes[i].querySelector(".info-imc").textContent = "ALTURA INVALIDA";
        pacientes[i].classList.add("paciente-invalido");
    }else{
        pacientes[i].querySelector(".info-imc").textContent = calcularImc(peso, altura);
    }
}

function calcularImc(peso, altura) {
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso <= 150){
        return true;
    }else{
        return false
    }
}


function validaAltura(altura) {
    if(altura >= 0 && altura <= 2.50){
        return true;
    }else{
        return false;
    }
}
