/*
let a = 10
let b = 10

console.log(b)

b = 5

console.log(a,b)

//O resultado do primeiro console é 10 já o do segundo é 10 e 5

a = 10
b = 20
let c = a
b = c
a = b

console.log(a, b, c)

//Faltou inicializar a C e o resultado do console é 10 e 10 e 10

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


Primeiramente o prompt = Abre uma caixa de dialogo no site
O alert abre uma caixa de alerta no site, mostrando tempo de trabalho divido por salario dia
Poderia ter sido usado no let p.... let horasTrab
E no let t.... salarDia 
*/

let nome = undefined
let idade = undefined 

console.log(typeof nome, typeof idade)

// Foi definido como objeto, por ainda não dei um valor a variavel

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

console.log(nome, idade)

console.log(typeof nome, typeof idade)

//As duas variaveis se tornarao String, pois foi digitado em uma caixa de dialogo

alert(`Olá ${nome} voce tem ${idade} anos`)

let perg1 = prompt("Voce esta bem hoje?")
let perg2 = prompt("Voce comeu hoje?")
let perg3 = prompt("Voce tem dinheiro?")

alert(`Voce esta bem hoje? - ${perg1}`)
alert(`Voce comeu hoje? - ${perg2}`)
alert(`Voce tem dinheiro? - ${perg3}`)

let a = 10
let b = 25
let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de a é", b)