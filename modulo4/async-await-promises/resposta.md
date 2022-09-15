*a.* Qual endpoint você deve utilizar para isso?
GET

b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?

any

a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona

Para mim tivemos o mesmo resultado

*a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` , teremos algum erro de tipagem?

Não teremos

b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso

Pois teremos um resultado mais adequado para lidar

a. Qual é o tipo dessa função? Por quê?

tipo POST para criar novas noticias