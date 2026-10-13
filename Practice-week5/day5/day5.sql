create database week5_day5;
use week5_day5;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    age INT
);

INSERT INTO employees (name, department, salary, age)
VALUES
('Ram', 'IT', 50000, 23),
('Shyam', 'HR', 35000, 25),
('Hari', 'IT', 65000, 28),
('Sita', 'Finance', 45000, 24),
('Gita', 'HR', 40000, 27),
('Ramesh', 'IT', 55000, 26),
('Mina', 'Finance', 60000, 29),
('Bikash', 'HR', 30000, 22),
('Anil', 'IT', 70000, 30),
('Nisha', 'Finance', 50000, 25);

select * from employees
where department = 'IT';

SELECT *
FROM employees
WHERE salary > 50000;

SELECT *
FROM employees
WHERE department = 'IT'
AND salary > 50000;

SELECT *
FROM employees
ORDER BY department ASC, salary DESC;

SELECT * FROM employees;


SELECT * FROM employees
ORDER BY id
LIMIT 3;

SELECT * FROM employees
ORDER BY id
LIMIT 3 OFFSET 3;

SELECT COUNT(*) AS total_employees
FROM employees;

SELECT SUM(salary) AS total_salary
FROM employees;

SELECT AVG(salary) AS average_salary
FROM employees;

SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;

SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 40000;

SELECT department, AVG(salary) AS average_salary FROM employees GROUP BY department HAVING AVG(salary) > 40000;

 SELECT * FROM employees ORDER BY salary DESC LIMIT 3;
 
 SELECT department, COUNT(*) AS total_employees FROM employees GROUP BY department;
 
 SELECT * FROM employees ORDER BY id LIMIT 4 OFFSET 4;