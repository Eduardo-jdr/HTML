const num1 = 2
const num2 = 10
const num3 = 5

function printar(){
    console.log(typeof num1, num2, num3)
    let p = `${typeof num1} ${num2} ${num3}`
    dentro()
    return typeof p
}


function dentro(){
    console.log("sucesso na sua conta");
}

const soma = () => console.log("QUALQUER COISA");

function somar(){
    dentro()
    return num1 + num2 + num3
}

const subtrair = () => {
    dentro()
    console.log(num1 - num2 - num3)
}

function printarProUsuario(){
    document.getElementById("resultado").textContent = "qualquer coisa"
    return document.getElementById("resultado").textContent = "qualquer coisa"
}