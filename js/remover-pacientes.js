var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fade-out")

    setTimeout(function() {
        if (event.target.tagName == 'TD') {
            event.target.parentNode.remove()
        }
    }, 600)

})

//pacientes.forEach(paciente => {
//    paciente.addEventListener("dblclick", function() {
//        this.remove()
//    })
//});