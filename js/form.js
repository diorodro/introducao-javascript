var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(evemt) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    var paciente = obtemInformacoesDoForm(form)



    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

    form.reset()
    var mensagemDeErro = document.querySelector("#mensagens-erro")
    mensagemDeErro.innerHTML = ""

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""

    erros.forEach(erro => {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });

    return ul
}


function obtemInformacoesDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montarTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montarTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = []



    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido")
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida")
    }

    if (paciente.nome.length == 0) {
        erros.push("Nome em Branco")
    }

    if (paciente.gordura.length == 0) {
        erros.push("Campo gordura em branco")
    }

    if (paciente.peso.length == 0) {
        erros.push("Campo peso em branco")
    }

    if (paciente.altura.length == 0) {
        erros.push("Campo altura em branco")
    }

    return erros
}