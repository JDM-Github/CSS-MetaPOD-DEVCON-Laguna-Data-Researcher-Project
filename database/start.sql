
DROP DATABASE IF EXISTS WaisDatabase;
CREATE DATABASE IF NOT EXISTS WaisDatabase;
USE WaisDatabase;

CREATE TABLE testTable(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO testTable (name)
VALUES ("John Dave"), ("Jun Ivanne"), ("Evan");

SELECT * FROM testTable;