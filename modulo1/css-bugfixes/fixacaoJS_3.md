```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let nota1 = ex
  let nota2 = p1 * 2
  let nota3 = p2 * 3
  let total = (nota1 + nota2 + nota3) / 6
  
  if(total >= 9){
    return 'A'
  } else if(total < 9 && total >= 7.5){
    return 'B'
  } else if(total < 7.5 && total >= 6){
    return 'C'
  } else {
    return'D'
  }
}```