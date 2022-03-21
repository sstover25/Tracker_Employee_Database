const express = require("express");
const router = express.Router();
const db = require("../../db/connections");

// GET all employees
router.get("/employees", (req, res) => {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(employee2.first_name, " ", employee2.last_name) AS manager 
  FROM employee 
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT OUTER JOIN employee AS employee2
  ON employee.manager_id = employee2.id

  `;
});

module.exports = router;
