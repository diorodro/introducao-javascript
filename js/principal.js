var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente")
var tdPeso = paciente.querySelector(".info-peso")
var tdAltura = paciente.querySelector(".info-altura")

var peso = tdPeso.textContent
var altura = tdAltura.textContent


var tdImc = paciente.querySelector(".info-imc")
var pesoValido = true
var alturaValida = true

if (peso <= 0 || peso > 450) {
    console.log("Peso inválido!")
    pesoValido = false
    tdImc.textContent = "Peso inválido"
}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!")
    alturaValida = false
    tdImc.textContent = "Altura inválida"
}

if (pesoValido && alturaValida) {
    var IMC = peso / (altura * altura)
    tdImc.textContent = IMC
}