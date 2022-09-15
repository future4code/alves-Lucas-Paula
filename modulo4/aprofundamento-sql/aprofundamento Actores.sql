SELECT * FROM `alves-lucas-paula`.introducao_Actor;
SET SQL_SAFE_UPDATES = 0;
ALTER TABLE introducao_Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE introducao_Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
ALTER TABLE introducao_Actor CHANGE gender gender VARCHAR(100);
UPDATE introducao_Actor SET name = 'Sabrina Sato', birth_date = "1981-01-04" WHERE id = '003';
UPDATE introducao_Actor SET name = 'JULIANA PAES' WHERE id = '005';
UPDATE introducao_Actor SET name = 'Juliana Paes' WHERE id = '005';
UPDATE introducao_Actor SET name = 'Emilia Clarke', birth_date = "1986-10-23", salary = 1200000, gender = 'female', favorite_ice_cream_flavor = 'Orange' WHERE id = '005';
UPDATE introducao_Actor SET name = 'Juliana Paes' WHERE id = '007';
INSERT INTO introducao_Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Fernanda Montenegro",
400000,
"1948-08-25",
"female"
);
DELETE FROM introducao_Actor WHERE name = "Fernanda Montenegro";
DELETE FROM introducao_Actor WHERE (gender = "male" AND salary > 1000000);
SELECT COUNT(*) FROM introducao_Actor;
SELECT COUNT(*) FROM introducao_Actor WHERE gender = "female";
SELECT AVG(salary) FROM introducao_Actor;
SELECT MAX(salary)FROM introducao_Actor;
SELECT MIN(salary) FROM introducao_Actor;
SELECT SUM(salary) FROM introducao_Actor;
SELECT * FROM introducao_Actor LIMIT 3;
SELECT * FROM introducao_Actor ORDER BY name ASC;
SELECT * FROM introducao_Actor ORDER BY name ASC LIMIT 4;
SELECT * FROM introducao_Actor WHERE gender = 'female' ORDER BY name ASC LIMIT 4;
SELECT COUNT(*), gender FROM introducao_Actor GROUP BY gender;
SELECT id, name FROM introducao_Actor ORDER BY name DESC;
SELECT * FROM introducao_Actor ORDER BY salary ASC;
SELECT * FROM introducao_Actor ORDER BY salary DESC LIMIT 3;
SELECT AVG(salary), gender FROM introducao_Actor GROUP BY gender;
