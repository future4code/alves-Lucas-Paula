/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

Primeiro FALSE
Segundo FALSE
Terceira TRUE
Quarto Boolean

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Precisa transforma os dados que recebeu do prompt em Int pois são salvos como String
para que seja impresso o resultado da soma entre o primeiro numero e o segundo,

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

const soma = primeiroNumero + segundoNumero

console.log(soma)


let idadeUser = prompt(`Digite sua idade!`)
let idadeAmigo = prompt(`Qual a idade do seu amigo (a)?`)

console.log(`Sua idade é maior do que a do seu melhor amigo? ${idadeUser>idadeAmigo}`)
console.log(`A diferença de idade entre vocês dois é de ${idadeUser-idadeAmigo}`)
*/

let numbPar = prompt(`Digite um numero par`)
let resultado = numbPar % 2

console.log(`O resto da divisão do numero por 2 é ${resultado}`)

// Todos os numero que par que são dividos por 2 terminam com resto 0
// Já os numero que são impar dividos por 2 terminam com resto 1

let idade = prompt(`Digite sua idade!`)

let idadeMes = idade * 12  
let idadeDias = idade * 365
let idadeHoras = idadeDias * 24

console.log(`Sua idade em meses é ${idadeMes}`)
console.log(`Sua idade em dias é ${idadeDias}`)
console.log(`Sua idade em horas é ${idadeHoras}`)

let numb1 = prompt(`Digite um numero!`)
let numb2 = prompt(`Digite um numero!`)

console.log(`O primeiro numero é maior que segundo?${numb1>numb2}`)
console.log(`O primeiro numero é igual ao segundo?${numb1==numb2}`)

let res = numb1%numb2

console.log(`O primeiro numero é divisível pelo segundo?${res==0}`)

res = numb2%numb1

console.log(`O segundo numero é divisível pelo primeiro?${res==0}`)