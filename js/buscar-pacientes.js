var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            mostraErro.classList.add("invisivel")
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            adicionaPacienteNaTabela(pacientes)

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            });

        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            var mostraErro = document.querySelector("#erro-ajax")
            mostraErro.classList.remove("invisivel")
        }

    })

    xhr.send()
})