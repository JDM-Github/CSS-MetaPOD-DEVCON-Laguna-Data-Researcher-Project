
DROP DATABASE IF EXISTS WaisDatabase;
CREATE DATABASE IF NOT EXISTS WaisDatabase;
USE WaisDatabase;

CREATE TABLE testTable(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO testTable (name)
VALUES ("John Dave"), ("Jun Ivanne"), ("Evan");

CREATE TABLE IndividualUser (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phone VARCHAR(20),
    Password VARCHAR(255) NOT NULL,
    DateOfBirth DATE,
    Gender ENUM('Male', 'Female', 'Other'),
    Location VARCHAR(100),
    LanguagePreferences VARCHAR(100),
    TermsOfServiceAgreement BOOLEAN
);

SELECT * FROM testTable;