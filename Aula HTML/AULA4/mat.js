function somar(){
    var numero01 = parseFloat(document.getElementById("n1").value)
    var numero02 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("resultadoSoma")
    
    if(isNaN(numero01) || isNaN(numero02)){
        res.textContent = "Digite algum número"
        return
    }

    res.innerHTML = numero01 + numero02
}

function subtrair(){
    var numero01 = parseFloat(document.getElementById("n3").value)
    var numero02 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resultadoSubtracao")

    if(isNaN(numero01) || isNaN(numero02)){
        res.textContent = "Digite algum número"
        return
    }

    res.innerHTML = numero01 - numero02
}

function divisao(){
    var numero01 = parseFloat(document.getElementById("n5").value)
    var numero02 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resultadoDivisao")

    if(isNaN(numero01) || isNaN(numero02)){
        res.textContent = "Digite algum número"
        return
    }

    if(numero02 !== 0){
        res.innerHTML = (numero01 / numero02).toFixed(2)
        res.style.color = "greenyellow"
        res.style.fontSize = "32px"
        document.getElementById("n6").style.border = "1px solid black"
    }else{
        res.innerHTML = "Não permite dividir por 0"
        res.style.color = "orange"
        res.style.fontSize = "16px"
        document.getElementById("n6").style.border = "2px solid red"
    }
}

function multiplicacao(){
    var numero01 = parseFloat(document.getElementById("n7").value)
    var numero02 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("resultadoMultiplicacao")

    if(isNaN(numero01) || isNaN(numero02)){
        res.textContent = "Digite algum número"
        return
    }

    res.innerHTML = numero01 * numero02
}

function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value)
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var res = (m1 + m2 + m3 + m4 + m5) / 5
    // media 7
    if(res >= 7){
        media.textContent = res.toFixed(1)
        msg.textContent = "PASSOU"
        msg.style.color = "green"
    }else{
        media.textContent = res.toFixed(1)
        msg.textContent = "REPROVOU"
        msg.style.color = "red"
    }
}

function calcIMC(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resposta = document.getElementById("res")

    if(isNaN(peso) || isNaN(altura)){
        resposta.textContent = "Digite números para o cálculo"
        document.getElementById("msg").textContent = " "
        return
    }

    var imc = (peso / (altura * altura)).toFixed(2)
    resposta.innerHTML = imc
   
    imc = parseFloat(imc)

    if(imc > 40){
        document.getElementById("msgIMC").textContent = "OBESIDADE GRAU 3"
    } else if(imc > 35 && imc <= 39.9){
        document.getElementById("msgIMC").textContent = "OBESIDADE GRAU 2"
    } else if(imc >= 30 && imc <= 34.9){
        document.getElementById("msgIMC").textContent = "OBESIDADE GRAU 1"
    } else if(imc >= 25.9 && imc <= 29.9){
        document.getElementById("msgIMC").textContent = "SOBREPESO"
    } else {
        document.getElementById("msgIMC").textContent = "NORMAL"
    }
}       

function checkMajority(){
    var wasBorn = parseInt(document.getElementById("clientBirth").value)
    // var wasBorn = document.getElementById("clientBirth").valueAsNumber
    var res = document.getElementById("result")
    res.textContent = ""

    if(isNaN(wasBorn)){
        res.textContent = "Type only numbers 🚫"
        res.style.color = "red"
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn

    if(age >= 18){
        res.textContent = "Over 18, ENTRY ✔"
        res.style.color = "green"
        document.getElementById("clientAge").textContent = `${age} - years old`
    } else {
        res.textContent = "UNDER 18, NOT ALLLOWED 😢"
        res.style.color = "red"
        document.getElementById("clientAge").textContent = `${age} - years old`
    }
}
