const express = require("express");
const cors = require("cors");
const { simulateAccess } = require("./logic/accessRules");
const employees = require("./data/employees.json");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/simulate", (req, res) => {
  const input = req.body.length ? req.body : employees;
  const results = simulateAccess(input);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
