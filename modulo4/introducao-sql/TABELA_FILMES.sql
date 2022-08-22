CREATE TABLE introducao_Moves (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
	evaluation INT NOT NULL
);

INSERT INTO introducao_Moves (id, name, sinopse, release_date, evaluation)
VALUES (
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
),(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
"2012-12-27",
10
),(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
),(
"004",
"Turma da Mônica: Laços",
"O Floquinho desaparece. Para encontrar seu cachorro de estimação, Cebolinha conta com os amigos Cascão, Mônica e Magali e, claro, um plano infalível.",
"2019-06-27",
4
);

SELECT id, name FROM introducao_Moves WHERE id = 003;
SELECT * FROM introducao_Moves WHERE name = "Doce de mãe";
SELECT id, name, sinopse FROM introducao_Moves WHERE evaluation >= 7;

SELECT * FROM introducao_Moves WHERE name LIKE "%vida%";
SELECT * FROM introducao_Moves WHERE (name LIKE "%mãe%" OR sinopse LIKE "%Floquinho%");
SELECT * FROM introducao_Moves WHERE release_date < "2022-08-22";

SELECT * FROM introducao_Moves WHERE (release_date < "2022-08-22" AND name LIKE "%mãe%" OR sinopse LIKE "%Floquinho%" AND evaluation >= 7);

