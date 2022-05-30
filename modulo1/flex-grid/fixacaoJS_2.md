```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numero = 0
  
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(numeroEscolhido == arrayDeNumeros[i]){
      numero += 1
    }
  }
  
  if(numero > 0){
    return `O número ${numeroEscolhido} aparece ${numero}x` 
  } else{
    return `Número não encontrado`
  }

}```