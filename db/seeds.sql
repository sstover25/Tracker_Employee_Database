INSERT INTO department (name)
VALUES
(Legal),
(Printing),
(QA);

INSERT INTO role (title, salary, department_id)
VALUES
(Head Researcher, 10,000.00, 3),
(Associate Researcher, 5,000.50, 3),
(Lawyer, 10,000.00, 1),
(CEO, 15,000.22, 1),
(Printer, 12,030.21, 2),
(Head Printer, 13,121.11, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Jack", "Boss", 4, null),
("Timmy", "McBoss", 3, 1),
("Betty", "Fraser", 1, null),
("Bella", "Goth", 2, 4),
("Prin", "Nom", 6, null),
("Mark", "Aimee", 5, 5);