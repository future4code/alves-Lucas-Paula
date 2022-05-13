/*
1 -
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

A - 10 E 50
B - NAO MOSTRARIA NADA, POIS NAO TERIA UM CONSOLE LOG PARA MOSTRAR OS RESULTADOS

2 -

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


A FUNCTION SERVE PARA COLOCAR AS LETRAS EM MINUSCULOS E VERIFIFICA SE É TRUE OU FALSE

i.   eu gosto de cenoura - TRUE
ii.  cenoura é bom pra vista - TRUE
iii. cenouras crescem na terra - TRUE

*/

// 1 - A

let texto = function (textinho){
    let textoDoUsuario = 'Eu sou Lucas, tenho 23 anos, moro em Minas Gerais e sou estudante.'
    return textoDoUsuario
}
console.log(texto())

// 1 - B

let array = []
let entrada = prompt('Digite seu nome, sua idade, sua cidade e sua profisão')
array = entrada.split(' ')

let dados = function (dado){
    return console.log(`Eu sou ${array[0]}, tenho ${array[1]}, moro em ${array[2]} e sou ${array[3]}.`)
}

dados()

// 2 - A

let somaNumer = function (num1, num2){
    return num1 + num2
}

console.log(somaNumer(5,7))

// // 2 -B

let testeLog = function(num1, num2){
    return num1 >= num2
}

console.log(testeLog(5,7))

// // 2 - C

let textLog = function(text){
    console.log(text.length)
    console.log(text.toLowerCase())
}

textLog('Eu sou lindo de mais')

// 3 

let soma = 0
let subtracao = 0
let multiplicacao = 0
let divisao = 0

let contaNume = function(num1, num2){
    soma = num1 + num2
    subtracao = num1 - num2
    multiplicacao = num1 * num2
    divisao = num1 / num2
    console.log(`A soma dos dois numero é ${soma}\n 
    A subtração dos dois numero é ${subtracao}\n
    A multiplicação dos dois numero é ${multiplicacao}\n
    A divisão dos dois numero é ${divisao}`)
}

contaNume(30, 3)

let number1 = +prompt('Digite um numero para calcular')
let number2 = +prompt('Digite o segundo numero para calcular')

let contaNum = function(num1, num2){
    soma = num1 + num2
    subtracao = num1 - num2
    multiplicacao = num1 * num2
    divisao = num1 / num2
    console.log(`A soma dos dois numero é ${soma}\n 
    A subtração dos dois numero é ${subtracao}\n
    A multiplicação dos dois numero é ${multiplicacao}\n
    A divisão dos dois numero é ${divisao}`)
}

contaNum(number1, number2)