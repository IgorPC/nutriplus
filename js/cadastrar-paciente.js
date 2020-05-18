var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", addPaciente);

function addPaciente(event) {
    event.preventDefault();
    var form = document.querySelector("#formulario-add");
    var paciente = receberDadosFormulario(form);

    var erros = validarPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }
    adicionaPacienteNaTabela(paciente);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    var ul = document.querySelector("#mensagens-erro");
    li = document.createElement("li");
    li.classList.add("sucesso");
    li.textContent="Paciente adicionado com sucesso";
    ul.appendChild(li);
    setTimeout(function () {
        ul.innerHTML="";
    }, 5000)
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montarTabela(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function receberDadosFormulario(form) {

    var paciente={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montarTabela(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Adiciona as colunas a tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validarPaciente(paciente) {

    var erros = [];

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso Invalido");
    }

    if(paciente.peso.length == 0){
        erros.push("Preencha o peso do paciente");
    }

    if(paciente.altura.length == 0){
        erros.push("Preencha a altura do paciente");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura Invalida");
    }

    if(paciente.nome.length == 0){
        erros.push("Preencha o nome do paciente");
    }

    if(paciente.gordura.length == 0){
        erros.push("Preencha a % de gordura do paciente");
    }

    if(paciente.gordura < 0 || paciente.gordura > 100){
        erros.push("Preencha um valor valido para a gordura");
    }

    return erros;
}

function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("erro");
        ul.appendChild(li);
    });
}

