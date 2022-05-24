ˋˋˋfunction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salario = 2000
  let comicao = 100 * qtdeCarrosVendidos
  let porcent = ((valorTotalVendas  * 5) / 100)
  
  porcent += comicao 
  salario += porcent
  return salario
}ˋˋˋ