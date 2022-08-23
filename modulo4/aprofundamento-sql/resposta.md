*ALTER TABLE Actor DROP COLUMN salary;

Vai apagar a coluna salary da tabela Actor

*ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

vai alterar o nome da coluna Gender para sex e transformar em campo de caracter de ate 6.

*ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

vai alterar a coluna gender transformando em campo de caracter de ate 255.

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

Foi retornado como confirmado a alteracao, porem como nao tem id, nao foi feita nenhuma alteracao

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

Ele mostrar os atores e atrizes que pertence a determinado grupo em gender
d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

Ele permite porem como não tem nenhum id, não sera feita nenhuma atualizacao