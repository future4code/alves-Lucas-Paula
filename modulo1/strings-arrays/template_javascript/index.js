/*
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
*/

// Na primeira o console vai mostrar a. undefined
// No segundo vai mostrar b. null
// No terceiro vai mostrar c. tamanho da array
// No quarto vai mostrar d. 3
// No quinto vai mostrar e. vai substituir o 4 por 19
// No sexto vai mostrar f. 9

// 2
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
*/
// Vai mostrar SUBI NUM ONIBUS EM MIRROCOS 23

// EXERCICIO ESCRITO

// 1

let nome = prompt("Digite seu nome!")
let email = prompt("Digite seu Email!")

console.log(`O email ${email.trim()} foi cadastrado com sucesso. Seja bem vindo(a), ${nome}`)


// 2

let arrayComidas = ['Lasanha', 'Macarrao', 'Hamburgue', 'Pizza', 'Carne']
console.log(arrayComidas)

console.log("Essas são as minhas comidas preferidas:\n", arrayComidas[0] ,"\n", arrayComidas[1] ,"\n" , arrayComidas[2] , "\n" , arrayComidas[3] , "\n" , arrayComidas[4])

arrayComidas[1] = prompt('Digite sua comida preferida!')
console.log(arrayComidas)

// 3

let array = []
let listaDeTarefas = array
let i = 0


listaDeTarefas = prompt('Digite uma tarefa')
array[i] = listaDeTarefas
i += + 1
listaDeTarefas = prompt('Digitae uma tarefa')
array[i] = listaDeTarefas
i += +1
listaDeTarefas = prompt('Digite uma tarefa')
array[i] = listaDeTarefas

listaDeTarefas = array

console.log(listaDeTarefas)

let dados = prompt('Digite o numero de uma tarefa já realizada') - 1
array.splice(dados, 1)

console.log(listaDeTarefas)