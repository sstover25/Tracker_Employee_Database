const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Kr1mKr4m!",
    database: "tracker_employee",
  },
  console.log("Connected to the Employee Tracker Database.")
);

module.exports = db;
