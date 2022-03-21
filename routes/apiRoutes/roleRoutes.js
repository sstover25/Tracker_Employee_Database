const express = require("express");
const router = express.Router();
const db = require("../../db/connections");

// GET all roles
router.get("/roles", (req, res) => {
  const sql = `SELECT role.title, role.id, department.name AS department, role.salary 
  FROM role 
  LEFT JOIN department 
  ON role.department_id = department.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// POST/Add a new role
router.post("/role", ({ body }, res) => {
  const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?,?,?)`;
  const params = [body.title, body.salary, body.department_id];

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

module.exports = router;
