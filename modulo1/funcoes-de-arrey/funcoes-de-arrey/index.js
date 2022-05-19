/*

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

VAI MOSTRAR O INDEX COM O ELEMENTO E A ARRAY A ONDE TA VINDO A INFO

2

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

VAI IMPRIMIR O NOME DOS OBJETOS

3

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

VAI IMPRIMIR OS APELIDOS DIFERENTE DE CHIJO

*/

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

let nomePets = pets.filter((item) => item.nome).map((item) => item.nome)
console.log(nomePets)

let cachorroSalsicha = pets.filter((item) => item.raca.toLowerCase() == 'salsicha').map((item) => item.nome)
console.log(cachorroSalsicha)

let mensagem = pets.filter((item) => item.raca.toLowerCase() == 'poodle').map((item) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
)
console.log(mensagem)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

let nomeProdutos = produtos.map((nome) => nome.nome)
console.log(nomeProdutos)

let descontoProdutos = produtos.map((desconto) => {
    let desconto1 = (desconto.preco * 5) / 100
    desconto.preco = desconto.preco - desconto1
    return obj = { nome: desconto.nome, preco: desconto.preco.toFixed(2) }
})
for (let elemento of descontoProdutos) { console.log(elemento) }

let bebidas = produtos.filter((bebidas) => bebidas.categoria.toLowerCase() == 'bebidas').map((bebidas) => obj = { nome: bebidas.nome, categoria: bebidas.categoria, preco: bebidas.preco.toFixed(2) })
for (let elemento of bebidas) { console.log(elemento) }

let ype = produtos.filter((ype) => ype.nome.includes('Ypê')).map((ype) => {
    return obj = { nome: ype.nome, categoria: ype.categoria, preco: ype.preco.toFixed(2) }
})
for (let elemento of ype) { console.log(elemento) }

let novaFrase = produtos.filter((ype) => ype.nome.includes('Ypê')).map((frase) => `Compre ${frase.nome} por ${frase.preco.toFixed(2)}`)
console.log(novaFrase)

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
let novo = pokemons.sort(function (a, b) {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
})

let nomePok = novo.map((pokemon) => pokemon.nome)
console.log(nomePok)

let novaArray = new Set(pokemons.map((pokemon) => pokemon.tipo)) // copiar apenas um elemento sem repetir
console.log(novaArray)

