var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(evemt) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    var paciente = obtemInformacoesDoForm(form)

    var pacienteTr = montarTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    form.reset()

});


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