// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

let altura = prompt('Digite a altura do retangulo')
let largura = prompt('Digite a largura do retangulo')

function calculaAreaRetangulo(num1,num2) {
  // implemente sua lógica aqui
  return num1 * num2
}

console.log(calculaAreaRetangulo(altura, largura))

// EXERCÍCIO 02

let anoAtul = +prompt('Digite o ano atual')
let anoUser = +prompt('Digite o seu ano de nascimento')

function imprimeIdade(num1, num2) {
  // implemente sua lógica aqui
  return num1 - num2
}

console.log(`O voce possui ${imprimeIdade(anoAtul,anoUser)} de idade`)

// EXERCÍCIO 03

let pesoKG = +prompt('Digite o peso da pessoa')
let altMetro = +prompt('Digite a aultura em METRO da pessoa')

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

console.log(`O seu IMC é ${calculaIMC(pesoKG, altMetro)}`)

// EXERCÍCIO 04

let array = []

let dados = prompt('Digite seu nome, sua idade, seu email')
array = dados.split(' ')

function imprimeInformacoesUsuario(array2) {
  // implemente sua lógica aqui
  return console.log(`Meu nome é ${array2[0]}, tenho ${array2[1]} anos, e o meu email é ${array2[2]}.`)
}

imprimeInformacoesUsuario(array)

// EXERCÍCIO 05

let arrayCor = []

let dadosUser = prompt('Digite suas 3 cores preferidas')
arrayCor = dadosUser.split(' ')

function imprimeTresCoresFavoritas(array) {
  // implemente sua lógica aqui
  return console.log(`Sua primeira cor preferida é ${array[0]} sua segunda cor preferida é ${array[1]} sua terceira cor preferida é ${array[2]}`)

}

imprimeTresCoresFavoritas(arrayCor)

// EXERCÍCIO 06

let dadosUs = prompt('Digite um texto, para ficar em maisculo')

function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return console.log(string.toUpperCase())

}

retornaStringEmMaiuscula(dadosUs)

// EXERCÍCIO 07

let dadosU =  +prompt('Digite o custo do espetaculo')
let ingreco = 25

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

console.log(`Precisa ser vendido ${calculaIngressosEspetaculo(dadosU, ingreco)}`)

// EXERCÍCIO 08

let priString = prompt('Digite um texto')
let segString = prompt('Digite outro texto')

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let res1 = string1.length
  let res2 = string2.length
  return res1 == res2 

}
console.log(checaStringsMesmoTamanho(priString, segString))

// EXERCÍCIO 09

let arrayTest = ['oi','tudo','bem']

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return console.log(array[0])
}

retornaPrimeiroElemento(arrayTest)

// EXERCÍCIO 10

let arrayUlt = [1,2,3,4,5,6,7,8]

function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento = array[array.length - 1]
  return console.log(ultimoElemento)

}

retornaUltimoElemento(arrayUlt)

// EXERCÍCIO 11

let arrayTrocs = [1,2,3,4,5,6,7,8]

function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui 
  [array[0], array[array.length - 1]] = [array[array.length -1], array[0]]
  return console.log(array)
}

trocaPrimeiroEUltimo(arrayTrocs)

// EXERCÍCIO 12

let string1 = 'Textando tudo'
let string2 = 'textando Tudo'

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return console.log(string1.toLowerCase() == string2.toLowerCase())

}

checaIgualdadeDesconsiderandoCase(string1, string2)

// EXERCÍCIO 13

let anoAtu = prompt('Digite o ano atual')
let anoNasc = prompt('Digite seu ano de nascimento')
let idAno = prompt('Digite o ano que expediu sua carteira')

function checaRenovacaoRG(anoAtual, anoNascimento, identidadeAno) {
  // implemente sua lógica aqui
  let idade = anoAtual - anoNascimento
  let vencimento = anoAtual - identidadeAno
  if(idade <= 20){
    console.log(`Você tem ${idade} anos de idade, tem que renovar de 5 em 5 anos`)
    if(vencimento >= 5){
      return console.log(`Sua carteira precisa ser renovada? ${vencimento>=5}`)
    } else{
      return console.log(`Sua indentidade tem ${vencimento} anos, ainda não precisa renovar`)
    }
  } else if(idade > 20 && idade <= 50){
    console.log(`Você tem ${idade} anos de idade, tem que renovar de 10 em 10 anos`) 
    if(vencimento >= 10){
      return console.log(`Sua carteira precisa ser renovada? ${vencimento >= 10}`)
    } else{
      return console.log(`Sua indentidade tem ${vencimento} anos, ainda não precisa renovar`)
    }
  } else{
    console.log(`Você tem ${idade} anos de idade, tem que renovar de 15 em 15 anos`) 
    if(vencimento >= 15){
      return console.log(`Sua carteira precisa ser renovada? ${vencimento >= 15}`)
    } else{
      return console.log(`Sua indentidade tem ${vencimento} anos, ainda não precisa renovar`)
    }
  }
}

checaRenovacaoRG(anoAtu, anoNasc, idAno)

// EXERCÍCIO 14

let bisAno = prompt('Digite um ano')

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  let biTest1 = ano % 4
  const teste1 = true
  const teste2 = false

  if(biTest1 == 0){
    let biTest2 = ano % 100
    if(biTest2 > 0){
      return console.log(`O ano é bissexto? ${teste1}`)
    } else{
      return console.log(`O ano é bissextow ${teste2}`)
    }
  } else{
    let biTest3 = ano % 400
    if(biTest3 == 0){
      return console.log(`O ano é bissexto? ${teste1}`)
    } else{
      return console.log(`O ano é bissexto? ${teste2}`)
    }
  }
}

checaAnoBissexto(bisAno)

// EXERCÍCIO 15

let infoUser = prompt('Você tem mais de 18 anos?')
let infoUs = prompt('Você possui ensino médio completo?')
let infoUsr = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

function checaValidadeInscricaoLabenu(maiorIdade, ensinoMedio, disponibilidade) {
  // implemente sua lógica aqui
  let mini = []

  let peq =  maiorIdade.toLowerCase()
  let pequi = ensinoMedio.toLowerCase()
  let pequini = disponibilidade.toLowerCase() 
  const testeLog = true
  const testeLog1 = false

  if(peq == 'sim'){
    if(pequi == 'sim'){
      if(pequini == 'sim'){
        return console.log(`Você pode ingressar na Labenur? ${testeLog}`)
      } else{
        return console.log(`Você pode ingressar na Labenur? ${testeLog1}`)
      }
    } else{
      return console.log(`Você pode ingressar na Labenur? ${testeLog1}`)
    }
  } else{
    return console.log(`Você pode ingressar na Labenur? ${testeLog1}`)
  }
}

checaValidadeInscricaoLabenu(infoUser, infoUs, infoUsr)