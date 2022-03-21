const express = require("express");
const inquirer = require("inquirer");
const db = require("./db/connections");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

const promptMenuQuestions = () => {
  console.log(`
  ---------
  Welcome to the Employee Tracker!
  ---------
  `);
  return inquirer.prompt([
    {
      type: "list",
      name: "action",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee's role",
      ],
      message: "Please select one of the following actions.",
    },
  ]);
};

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // run inquirer
    promptMenuQuestions();
  });
});
