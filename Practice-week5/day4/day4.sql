
DROP DATABASE IF EXISTS college;

CREATE DATABASE college;

USE college;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO users (id, name)
VALUES
(1, 'Ram'),
(2, 'Shyam');

SELECT * FROM users;

CREATE TABLE profiles (
    id INT PRIMARY KEY,
    user_id INT UNIQUE,
    address VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO profiles (id, user_id, address)
VALUES
(1, 1, 'Kathmandu'),
(2, 2, 'Pokhara');

SELECT * FROM profiles;


CREATE DATABASE typeorm_practice;
USE typeorm_practice;


SHOW TABLES;

DESCRIBE students;

SELECT * FROM students;
SELECT * FROM migrations;


CREATE DATABASE week_day4;

USE week5_day4;

CREATE TABLE accounts (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
balance DECIMAL (10,2) NOT NULL
);

INSERT INTO accounts (name, balance)
VALUES
('Ram',5000),
('Shyam',3000);

SELECT * FROM accounts;

START TRANSACTION;
UPDATE accounts
SET balance = balance - 2000
WHERE name = 'Ram';

UPDATE accounts
SET balance = balance + 2000
WHERE name = 'Shyam';

COMMIT;
SELECT * FROM accounts;

START TRANSACTION;

UPDATE accounts
SET balance = balance - 2000
WHERE name = 'Ram';

UPDATE accounts
SET balance = balance + 2000
WHERE name = 'Shyam';

ROLLBACK;

SELECT * FROM accounts;

START TRANSACTION;

UPDATE accounts
SET balance = balance - 2000
WHERE id = 1
AND balance >= 2000;

SELECT ROW_COUNT() AS row_updated;


 