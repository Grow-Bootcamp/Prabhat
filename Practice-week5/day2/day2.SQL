CREATE DATABASE college;
USE college;

CREATE TABLE students (
id INT,
name VARCHAR(50),
age INT,
email VARCHAR(50)
);
SELECT * FROM students;
INSERT INTO students (id, name, age, email)
VALUES 
(1, 'Prabhat', 20, 'prabhat@gmail.com'),
(2, 'Ram', 22, 'ram@gmail.com'),
(3, 'Sita', 21, 'sita@gmail.com');
