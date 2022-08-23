SELECT * FROM `alves-lucas-paula`.introducao_Moves;
SET SQL_SAFE_UPDATES = 0;
ALTER TABLE introducao_Moves ADD playing_limit_date VARCHAR(255);
ALTER TABLE introducao_Moves CHANGE evaluation evaluation FLOAT;
UPDATE introducao_Moves SET name = 'Game of Thrones', playing_limit_date = "2019-05-19" WHERE id = '004';
UPDATE introducao_Moves SET  playing_limit_date = "2022-09-19" WHERE id = '001';
DELETE FROM introducao_Moves WHERE id = "003";
UPDATE introducao_Moves SET sinopse = "uiii" WHERE id = '003';