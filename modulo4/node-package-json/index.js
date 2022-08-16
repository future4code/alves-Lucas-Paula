// a) Responda como comentário no seu código: como fazemos para acessar os 
// parâmetros passados na linha de comando para o Node?

// Resposta = Basta utilizar process.argv[2]

// b) Crie um programa que receba seu nome e sua idade. Após receber estes 
// valores, imprima no console uma mensagem que siga a seguinte estrutura:

// Resposta = console.log(`Olá, ${process.argv[2]} Você tem ${process.argv[3]} anos.`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// Resposta = console.log(`Olá, ${process.argv[2]} Você tem ${process.argv[3]} anos, em 7 anos você tera ${parseInt(process.argv[3]) + 7}`)

// Crie uma aplicação Node que recebe uma string representando uma operação matemática e 
// dois valores numéricos. O retorno deverá ser o resultado da operação selecionada 
// utilizando os 2 valores fornecidos.

// Resposta = switch (process.argv[2]) {
//     case 'add':
//         return console.log(`Resposta ${parseInt(process.argv[3] + process.argv[4])}`)
//     case 'sub':
//         return console.log(`Resposta ${parseInt(process.argv[3] - process.argv[4])}`)
//     case 'mult':
//         return console.log(`Resposta ${parseInt(process.argv[3] * process.argv[4])}`)
//     case 'div':
//         return console.log(`Resposta ${parseFloat(process.argv[3] / process.argv[4])}`)
// }

// Crie uma aplicação Node que receba uma string representando uma tarefa. 
// O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. 
// A lista de tarefas pode estar criada antes da execução do código. 
// Após adicionar o item à lista, exiba a lista atualizada.

let tarefas = []

function adicionaTarega(item) {
    const fs = require('fs')

    fs.readFile('./test.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const oi = JSON.parse(data)
        tarefas = [...oi, item]

        console.table(tarefas)

        const content = JSON.stringify(tarefas)
        fs.writeFile('./test.txt', content, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    })

}

adicionaTarega(process.argv[2])
