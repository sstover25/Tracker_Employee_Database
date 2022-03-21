const express = require("express");
const router = express.Router();
const db = require("../../db/connections");

// GET all roles
router.get("/roles", (req, res) => {
  const sql = `SELECT role.title, role.id, department.name AS department, role.salary 
  FROM role 
  LEFT JOIN department 
  ON role.department_id = department.id`;
});

module.exports = router;
