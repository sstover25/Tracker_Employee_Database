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
  ON employee.manager_id = employee2.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "succes",
      data: rows,
    });
  });
});

// POST/Add a new employee
router.post("/employee", ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// PUT/Update an employee's role
router.put("/employee/:id", (req, res) => {
  const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
  const params = [req.body.role_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found.",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

module.exports = router;
