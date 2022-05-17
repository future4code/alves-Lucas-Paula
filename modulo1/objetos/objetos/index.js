/*

1-

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

A - Matheus Nachtergaele
Virginia Cavendish
Globo 14h

2 -

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

A - JUCA 3 SRD
JUBA 3 SRD
JUCO 3 SRD

B - VAI CLONAR DETERMINADO OBJETO OU ARRAY

3 -

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

A - FALSE
UNDEFINED

B - NAO SEI EXPLICAR
*/

// 1 - A 

let pessoa = {
    nome: 'Lucas',
    apelidos: ['lindo', 'Luks', 'bonito']
}

let pessoas = function (texto){
	console.log(`Eu sou ${texto.nome}, mas pode me chamar de: ${texto.apelidos[0]}, ${texto.apelidos[1]} ou ${texto.apelidos[2]}`)
}

pessoas(pessoa)

// B

let novaPessoa = {
	...pessoa,
	apelidos: ['DK', 'Luquinhas', 'Tutor']
}

pessoas(novaPessoa)

// 2 

let profi = {
	nome: 'Lucas',
	idade: 23,
	profissao: 'Estudante'
}

let profissão = {
	nome: 'João',
	idade: 18,
	profissao: 'Marceneiro'
}

let prof = function(obj1, obj2) {
	array1 = [obj1.nome, obj1.idade, obj1.profissao]
	array2 = [obj2.nome, obj2.idade, obj2.profissao]
	console.log(array1[0], array1[0].length, array1[1], array1[2], array1[2].length)
	console.log(array2[0], array2[0].length, array2[1], array2[2], array2[2].length)
}

prof(profi, profissão)

// 3 

// A -

let vazio = undefined
let carrinho = []

vazio = carrinho

// B -

let fruta1 = {
	nome: 'Manga',
	disponibilidade: true
}

let fruta2 = {
	nome: 'Maça',
	disponibilidade: true
}

let fruta3 = {
	nome: 'Uva',
	disponibilidade: true
}

// C -

let sacolao = function (fruta1, fruta2, fruta3) {
	carrinho.push(fruta1, fruta2, fruta3)

}

sacolao(fruta1, fruta2, fruta3)

// D -

console.log(vazio)


// DESAFIO

let perg = function (obj1) {
	nomeUs = prompt('Qual o seu nome?')
	idadeUs = +prompt('Qual sua idade?')
	pro = prompt('Qual sua profissão?')

	obj1 = {
		nome: nomeUs,
		idade: idadeUs,
		profissao: pro
	}
	
	console.log(typeof obj1, obj1)
}

perg()

let filmes = function (obj1, obj2) {
	
	let filme1 = {
		nome: undefined,
		lancamento: undefined
	}
	
	let filme2 = {
		nome: undefined,
		lancamento: undefined
	}

	filme1.nome = prompt('Digite um filme de sua preferencia!')
	filme1.lancamento = prompt('Digite o ano de lancamento!')

	filme2.nome = prompt('Digite um filme de sua preferencia!')
	filme2.lancamento = prompt('Digite o ano de lancamento!')

	obj1 = filme1
	obj2 = filme2
	
	console.log(`O primeiro filme foi lançado antes do segundo? ${obj1.lancamento < obj2.lancamento}`)
	console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${obj1.lancamento == obj2.lancamento}`)
}

filmes()

let estoque = function (obj1) {
	console.log(obj1.disponibilidade = false)
	console.log(obj1)
}

estoque(fruta1)