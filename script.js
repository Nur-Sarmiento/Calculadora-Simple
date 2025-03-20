let nro1Input =document.getElementById("num1")
let nro2Input =document.getElementById("num2")

let Bsuma =document.getElementById("btn-suma")
let Bresta=document.getElementById("btn-resta")
let Bmult =document.getElementById("btn-mult")
let Bdiv =document.getElementById("btn-div")

let result =document.getElementById("resultado")

function sumar(){
    let x=parseFloat(nro1Input.value)+parseFloat(nro2Input.value)
    result.innerText= `Resultado: ${x}`
}

function resta(){
    let x=parseFloat(nro1Input.value)-parseFloat(nro2Input.value)
    result.innerText= `Resultado: ${x}`
}

function multiplicacion(){
    let x=parseFloat(nro1Input.value)*parseFloat(nro2Input.value)
    result.innerText= `Resultado: ${x}`
}

function division(){
    let x=parseFloat(nro1Input.value)/parseFloat(nro2Input.value)
    result.innerText= `Resultado: ${x}`
}

Bsuma.addEventListener("click",sumar)
Bresta.addEventListener("click",resta)
Bmult.addEventListener("click",multiplicacion)
Bdiv.addEventListener("click",division)