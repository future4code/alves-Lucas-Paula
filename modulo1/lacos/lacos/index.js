/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

VAI MOSTRAR 10

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
        console.log(numero)
    }
}

19 21 23 25 27 30

for(let elemento of lista){
    console.log(elemento)
}

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

vai mostrar os asteriscos de acordo com a quantidade
*/

let quantBichos = +prompt("Digite a quantidade de bichinhos de estimacao que voce tem?")
let arrayBichos = []
if (quantBichos == 0) {
    console.log(`Que pena! Você pode adotar um pet!`)
} else {
    for (let i = 0; i < quantBichos; i++) {
        let nomeBichos = prompt(`Digite o nome de um por um`)
        arrayBichos[i] = nomeBichos
    }
    for (let elemento of arrayBichos) {
        console.log(elemento)
    }
}

let arrayOriginal = []

let numeros = function () {
    let dados = +prompt("Digite a quantidade de casas do array ")
    for (let i = 0; i < dados; i++) {
        let dados2 = +prompt("Digite um numero para o array")
        arrayOriginal[i] = dados2
    }
    for (let elemento of arrayOriginal) {
        console.log(elemento)
    }
}

numeros(arrayOriginal)

let numerosDividos = function () {
    let dados = +prompt("Digite a quantidade de casas do array ")
    for (let i = 0; i < dados; i++) {
        let dados2 = +prompt("Digite um numero para o array")
        arrayOriginal[i] = dados2 / 10
    }
    for (let elemento of arrayOriginal) {
        console.log(elemento)
    }
}

numerosDividos(arrayOriginal)

let numerosPares = function () {
    let dados = +prompt("Digite a quantidade de casas do array ")
    for (let i = 0; i < dados; i++) {
        let dados2 = +prompt("Digite um numero para o array")
        if (dados2 % 2 == 0) {
            arrayOriginal[i] = dados2
        } else {
            console.log(`Esse numero nao é par, não sera adicionado`)
            i--
        }
    }
    for (let elemento of arrayOriginal) {
        console.log(elemento)
    }
}

numerosPares(arrayOriginal)

let numerosString = function () {
    let dados = +prompt("Digite a quantidade de casas do array ")
    for (let i = 0; i < dados; i++) {
        let dados2 = prompt("Digite um numero para o array").toString()
        arrayOriginal[i] = dados2
        console.log(`O elemento do index ${i} é ${dados2}`)
    }
    for (let elemento of arrayOriginal) {
        console.log(elemento)
    }
}

numerosString(arrayOriginal)

let numerosMaiorEMenor = function () {
    let maior = 0
    let menor = Infinity
    let dados = +prompt("Digite a quantidade de casas do array ")
    for (let i = 0; i < dados; i++) {
        let dados2 = +prompt("Digite um numero para o array")
        arrayOriginal[i] = dados2
    }
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] > maior) {
            maior = arrayOriginal[i]
        }
    }
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] < menor) {
            menor = arrayOriginal[i]
        }
    }
    console.log(`O maior numero do array é ${maior}`)
    console.log(`O menor numero do array é ${menor}`)
}

numerosMaiorEMenor(arrayOriginal)

let primeiroNumero = +prompt("Escolha seu numero!")
console.log(`Vamos jogar!`)
let escolha = undefined
let tentativas = 0

for (let i = 0; i > -1;) {
    escolha = +prompt("Qual foi o numero escolhido")
    tentativas = tentativas + 1
    if (escolha < primeiroNumero) {
        console.log(`Errou: O número escolhido é maior`)
        i++
    } else if (escolha > primeiroNumero) {
        console.log(`Errou: O número escolhido é menor`)
        i++
    } else if (escolha == primeiroNumero) {
        console.log(`Parabens, você acertou o meu numero, que era o ${primeiroNumero}`)
        console.log(`O numero de tentativas foi de : ${tentativas}`)
        i = -1
    }
}
let compRandom = function (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let computador = Math.floor(Math.random() * (max - min)) + min
    console.log(`Vamos jogar!`)
    let escolha = undefined
    let tentativas = 0

    for (let i = 0; i > -1;) {
        escolha = +prompt("Qual foi o numero escolhido")
        tentativas = tentativas + 1
        if (escolha < computador) {
            console.log(`Errou: O número escolhido é maior`)
            i++
        } else if (escolha > computador) {
            console.log(`Errou: O número escolhido é menor`)
            i++
        } else if (escolha == computador) {
            console.log(`Parabens, você acertou o meu numero, que era o ${computador}`)
            console.log(`O numero de tentativas foi de : ${tentativas}`)
            i = -1
        }
    }
}

compRandom(1, 100)