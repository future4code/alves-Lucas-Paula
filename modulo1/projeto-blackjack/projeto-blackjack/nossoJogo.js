console.log("Boas vindas ao jogo de Blackjack!")
let pessoa1 = 0
let pessoa2 = 0
let contador = 0
let contador2 = 0

function random(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

let jogo = (pessoa1, pessoa2,) => {
   let carta = comprarCarta()

   pessoa2 = pessoa2 + carta.valor
   console.log(`Computador - carta: ${carta.texto} - pontuacao ${carta.valor}`)
   carta = comprarCarta()
   pessoa2 = pessoa2 + carta.valor
   console.log(`Computador - carta: ${carta.texto} - pontuacao ${carta.valor}`)

   while (contador2 < 21) {
      let random1 = random(1, 4)

      if (pessoa2 > 21) {
         pessoa2 = 21
      } else if (random1 == 2) {

         carta = comprarCarta()
         pessoa2 = pessoa2 + carta.valor
         console.log(`Computador - carta: ${carta.texto} - pontuacao ${carta.valor}`)

         if (pessoa2 > 21) {
            console.log(`O computadorador estouro, pontuacao final ${pessoa2}`)
            contador2 = 21
         }

      } else {
         console.log(`O computador nao quer mais carta`)
         console.log(`A pontuacao final do computador é ${pessoa2}`)
         contador2 = 21
      }
   }

   carta = comprarCarta()
   pessoa1 = pessoa1 + carta.valor
   console.log(`Usuario - carta: ${carta.texto} - pontuacao ${carta.valor}`)
   carta = comprarCarta()
   pessoa1 = pessoa1 + carta.valor
   console.log(`Usuario - carta: ${carta.texto} - pontuacao ${carta.valor}`)

   while (contador < 21) {
      if (confirm(`Você quer mais uma carta?`)) {
         let carta = comprarCarta()
         pessoa1 = pessoa1 + carta.valor
         console.log(`Usuario - cartas: ${carta.texto} - pontuacao ${pessoa1}`)
         if (pessoa1 > 21) {
            console.log(`Você estourou sua pontuacao final é ${pessoa1}`)
            contador = 21
         }
      } else {
         console.log(`Sua pontuacao final é ${pessoa1}`)
         contador = 21
      }
   }

   if (pessoa1 == pessoa2) {
      console.log(`Empate, usuario com ${pessoa1} e computador com ${pessoa2}`)
   } else if (pessoa1 == 21) {
      console.log(`O usuário ganhou!`)
   } else if (pessoa2 == 21) {
      console.log(`O computador ganhou!`)
   } else {
      if (pessoa1 < 21) {
         if (pessoa2 < 21) {
            if (pessoa1 > pessoa2) {
               console.log(`O usuário ganhou!`)
            } else {
               console.log(`O computador ganhou!`)
            }
         } else {
            console.log(`O usuario ganhou, pois o computador estourou`)
         }
      } else if (pessoa2 < 21) {
         if (pessoa1 < 21) {
            if (pessoa2 > pessoa1) {
               console.log(`O computador ganhou!`)
            } else {
               console.log(`O usuário ganhou!`)
            }
         } else {
            console.log(`O computador ganhou, pois o usuario estourou`)
         }
      } else {
         if (pessoa1 > pessoa2) {
            console.log(`O computador ganhou pois estourou com o menor valor, total ${pessoa2}`)
         } else {
            console.log(`O usuario ganhou pois estourou com o menor valor, total ${pessoa1}`)
         }
      }
   }
}

if (confirm(`Quer iniciar uma nova rodada`)) {
   jogo(pessoa1, pessoa2)

} else {
   console.log(`O jogo acabou.`)
}