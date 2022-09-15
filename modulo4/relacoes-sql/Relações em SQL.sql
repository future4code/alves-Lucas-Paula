CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES introducao_Moves(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"004"
);

ALTER TABLE introducao_Moves DROP COLUMN rating;

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES introducao_Moves(id),
    FOREIGN KEY (actor_id) REFERENCES introducao_Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
);

SELECT * FROM introducao_Moves 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT Movies.id, name, rate FROM introducao_Moves
INNER JOIN Rating
ON Movies.id = Rating.movie_id;