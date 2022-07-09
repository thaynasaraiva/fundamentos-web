
let nome = window.document.getElementById('nome')
let sobrenome = window.document.getElementById('sobrenome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width= '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaSobrenome() {
    let txtSobrenome = document.querySelector('#txtSobrenome')
    if(Sobrenome.value.length < 3) {
        txtSobrenome.innerHTML = "Sobrenome inválido"
        txtSobrenome.style.color = "red"
    } else {
        txtSobrenome.innerHTML = "Sobrenome válido"
        txtSobrenome.style.color = "green"
        sobrenomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length > 100) {
        txtAssunto.innerHTML = "Assunto muito grande. Digite um texto de no máximo 100 caracteres."
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && sobrenomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Mensagem enviada com sucesso!!")
    } else {
        alert("Preencha todos os do formulário antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}