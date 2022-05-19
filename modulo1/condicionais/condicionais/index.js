/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

A - O codigo vai falar se o numero que a pessoa digitou tem resto 0
B - Para numeros par
C - Para numero impar

2 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A - Para verificar o preço da fruta
B - 2.25
C - Ele ia continuar lendo o codigo ate o final

3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

A - Esta pedindo para o usuario digitar um numero e transformando ele em inteiro
B - Esse número passou no teste // Nao ia aparecer nada
C - Esta faltando uma condicação se caso o numero nao for > 0.
*/
let idadeLog = function(idade){
    idade = +prompt("Digite a sua idade")
    if(idade >= 18){
        console.log(`Você pode dirigir`)
    } else {
        console.log(`Você não pode dirigir`)
    }
}

idadeLog()

let turnoLog = function(turno){
    turno = prompt("Digite o horario que voce estudo: M - (matutino) V - (Vespertino) ou N - (Noturno)").toUpperCase()
        if(turno == 'M'){
            console.log(`Bom Dia!`)
        } else if(turno == 'V'){
            console.log(`Boa Tarde!`)
        } else if(turno == 'N'){
            console.log(`Boa Noite!`)
        } else{
            console.log(`Tente novamente, algo foi digitado errado!`)
        }
}

turnoLog()

let turnoLog2 = function(turno){
    turno = prompt("Digite o horario que voce estudo: M - (matutino) V - (Vespertino) ou N - (Noturno)").toUpperCase()
    switch(turno) {
        case 'M':
            console.log(`Bom Dia!`)
            break
        case 'V':
            console.log(`Boa Tarde!`)
            break
        case 'N':
            console.log(`Boa Noite!`)
            break
        default:
            console.log(`Tente novamente, algo foi digitado errado!`)
    }
}

turnoLog2()

let filme = function (confirmacao){
    let genero = prompt("Qual o genero do filme escolhido?").toLowerCase()
    genero = genero == 'fantasia'
    let precoIngreco = +prompt("Qual o valor do filme?")
    confirmacao = precoIngreco <= 15

    switch(genero){
        case true:
            if(confirmacao == true){
                console.log(`Bom filme!`)
                break
            } else{
               console.log(`Escolha outro filme :(`) 
               break
            }
        case false:
            if(confirmacao == true){
                console.log(`Bom filme!`)
                break
            } else{
               console.log(`Escolha outro filme :(`) 
               break
            }
    }
}

filme()

let filme2 = function (confirmacao){
    let genero = prompt("Qual o genero do filme escolhido?").toLowerCase()
    genero = genero == 'fantasia'
    let precoIngreco = +prompt("Qual o valor do filme?")
    confirmacao = precoIngreco <= 15

    switch(genero){
        case true:
            if(confirmacao == true){
                let lanche = prompt("Qual lanchedeseja: PIPOCA, CHOCOLATE, DOCES OU ETC")
                console.log(`Bom filme!`)
                console.log(`Aproveite o seu/sua ${lanche}`)
                break
            } else{
               console.log(`Escolha outro filme :(`) 
               break
            }
        case false:
            if(confirmacao == true){
                let lanche = prompt("Qual lanchedeseja: PIPOCA, CHOCOLATE, DOCES OU ETC")
                console.log(`Bom filme!`)
                console.log(`Aproveite o seu ${lanche}`)
                break
            } else{
               console.log(`Escolha outro filme :(`) 
               break
            }
    }
}

filme2()

let ingrecoFut = function(){
    let obj = {
        nome: undefined,
        tipoDeJogo: undefined,
        etapaDoJogo: undefined,
        categoria: undefined,
        quantidadeIngreco: undefined
    }

    let quantidadeIngreco = 0

    obj.tipoDeJogo = prompt(`Digite o tipo do jogo: IN indica internacional; e DO indica doméstico!`)

    obj.tipoDeJogo = obj.tipoDeJogo == 'DO'

    switch (obj.tipoDeJogo) {
        case true:
            obj.nome = prompt(`Digite seu nome completo!`)
            obj.etapaDoJogo = prompt(`Digite a etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final!`).toUpperCase()
            obj.categoria = prompt(`Digite a categoria: pode ser as opções 1, 2, 3 ou 4!`)
            obj.quantidadeIngreco = prompt(`Digite a quantidade de ingreço!`)

            if(obj.etapaDoJogo == 'SF'){
                if(obj.categoria == 1){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 1320.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 1320.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 2){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 820.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 820.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 3){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 550.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 550.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 4){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 220.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 220.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                } 
            } else if(obj.etapaDoJogo == 'DT'){
                if(obj.categoria == 1){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 660.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 660.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 2){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 440.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 440.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 3){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 330.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 330.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 4){
                    quantidadeIngreco = obj.quantidadeIngreco
                    let valorIngreco = 170.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 170.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                } 
            } else{
                if(obj.categoria == 1){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 1980.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 1980.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 2){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 1320.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 1320.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 3){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 880.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 880.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 4){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 330.00
                    obj.quantidadeIngreco = obj.quantidadeIngreco * 330.00
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: R$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                } 
            }
            break

        case false:

            obj.nome = prompt(`Digite seu nome completo!`)
            obj.etapaDoJogo = prompt(`Digite a etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final!`).toUpperCase()
            obj.categoria = prompt(`Digite a categoria: pode ser as opções 1, 2, 3 ou 4!`)
            obj.quantidadeIngreco = prompt(`Digite a quantidade de ingreço!`)

            if(obj.etapaDoJogo == 'SF'){
                if(obj.categoria == 1){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 1320.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }else if(obj.categoria == 2){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 880.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                }else if(obj.categoria == 3){
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 550.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                } else{
                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 220.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                }
            } else if(obj.etapaDoJogo == 'DT'){
                if(obj.categoria == 1){

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 660.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                }else if(obj.categoria == 2){

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 440.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                }else if(obj.categoria == 3){

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 330.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                } else {

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 170.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                }
            } else{
                if(obj.categoria == 1){

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 1980.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                } else if(obj.categoria == 2){

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 1320.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                } else if(obj.categoria == 3){

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 880.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break

                } else {

                    quantidadeIngreco = obj.quantidadeIngreco 
                    let valorIngreco = 330.00 / 4.10
                    obj.quantidadeIngreco = obj.quantidadeIngreco * valorIngreco
                    console.log(`---Dados da compra---`)
                    console.log(`Nome do cliente: ${obj.nome}`)
                    console.log(`Tipo do jogo: ${obj.tipoDeJogo}`)
                    console.log(`Etapa do jogo: ${obj.etapaDoJogo}`)
                    console.log(`Categoria: ${obj.categoria}`)
                    console.log(`Quantidade de Ingressos: ${quantidadeIngreco}`)
                    console.log(`---Valores---`)
                    console.log(`Valor do ingresso: U$ ${valorIngreco}`)
                    console.log(`valor total: ${obj.quantidadeIngreco}`)
                    break
                }
            }
    }
}

ingrecoFut()