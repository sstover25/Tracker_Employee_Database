INSERT INTO department (name)
VALUES
("Legal"),
("Printing"),
("QA");

INSERT INTO role (title, salary, department_id)
VALUES
("Head Researcher", 10000, 3),
("Associate Researcher", 5000, 3),
("Lawyer", 10000, 1),
("CEO", 15000, 1),
("Printer", 12030, 2),
("Head Printer", 13121, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Jack", "Boss", 4, null),
("Timmy", "McBoss", 3, 1),
("Betty", "Fraser", 1, null),
("Bella", "Goth", 2, 3),
("Prin", "Nom", 6, null),
("Mark", "Aimee", 5, 5);