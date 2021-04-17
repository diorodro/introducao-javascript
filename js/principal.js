var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")


for (var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso")
    var tdAltura = pacientes[i].querySelector(".info-altura")

    var peso = tdPeso.textContent
    var altura = tdAltura.textContent


    var tdImc = pacientes[i].querySelector(".info-imc")
    var pesoValido = true
    var alturaValida = true

    if (peso <= 0 || peso > 450) {
        console.log("Peso inválido!")
        pesoValido = false
        tdImc.textContent = "Peso inválido"
        pacientes[i].style.color = "yellow"
        pacientes[i].style.backgroundColor = "purple"
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!")
        alturaValida = false
        tdImc.textContent = "Altura inválida"
        pacientes[i].style.color = "whitesmoke"
        pacientes[i].classList.add("paciente-invalido")
    }

    if (pesoValido && alturaValida) {
        var IMC = peso / (altura * altura)
        tdImc.textContent = IMC.toFixed(2)
    }

}