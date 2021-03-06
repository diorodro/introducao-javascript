var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

titulo.addEventListener("click", function() {
    console.log("Alõ, seja bem-vindo!")
});

var pacientes = document.querySelectorAll(".paciente")


for (var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso")
    var tdAltura = pacientes[i].querySelector(".info-altura")

    var peso = tdPeso.textContent
    var altura = tdAltura.textContent


    var tdImc = pacientes[i].querySelector(".info-imc")
    var pesoValido = validaPeso(peso)
    var alturaValida = true

    if (!pesoValido) {
        console.log("Peso inválido!")
        tdImc.textContent = "Peso inválido"
        pacientes[i].style.color = "yellow"
        pacientes[i].style.backgroundColor = "purple"
    }

    if (!alturaValida) {
        console.log("Altura inválida!")
        tdImc.textContent = "Altura inválida"
        pacientes[i].style.color = "whitesmoke"
        pacientes[i].classList.add("paciente-invalido")
    }

    if (pesoValido && alturaValida) {
        var IMC = calculaImc(peso, altura)
        tdImc.textContent = IMC
    }
}

function calculaImc(peso, altura) {
    var imc = 0

    imc = peso / (altura * altura)
    console.log(imc)
    console.log(altura)
    console.log(peso)
    return imc.toFixed(2)
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 450) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true
    } else {
        return false
    }
}