CREATE TABLE introducao_Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE introducao_Actor;

INSERT INTO introducao_Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO introducao_Actor (id,name,salary,birth_date,gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO introducao_Actor (id,name,salary,birth_date,gender)
VALUES(
"003", 
"Fernanda Montenegro",
300000,
"1929-10-19", 
"female"
), (
"004",
"Jhon Snow",
400000,
"1949-04-18", 
"male"
), (
"005", 
"Juliana Paes",
719333.33,
"1979-03-26", 
"female"
);

SELECT * FROM introducao_Actor;
SELECT id, salary FROM introducao_Actor;
SELECT id, name FROM introducao_Actor WHERE gender = "male";

SELECT * FROM introducao_Actor WHERE gender = "female";
SELECT id, salary FROM introducao_Actor WHERE name = "Tony Ramos";
SELECT * FROM introducao_Actor WHERE gender = "invalid";
SELECT id, name, salary FROM introducao_Actor WHERE salary <= 500000; 
SELECT id, nome FROM introducao_Actor WHERE id = "002";
SELECT * FROM introducao_Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM introducao_Actor WHERE (name  NOT LIKE "A%") AND salary > 350000;
SELECT * FROM introducao_Actor WHERE (name LIKE "%G%" OR name LIKE "%g%") AND salary > 300000;
SELECT * FROM introducao_Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%" ) AND salary BETWEEN 350000 AND 900000;
