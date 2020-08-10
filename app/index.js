const createHandler = require("azure-function-express").createHandler;
const express = require("express");

// Create express app as usual
const app = express();
app.get("/", (req, res) => {
  res.json({ Message: "Get Request" });
});
app.post("/", (req, res) => {
  res.json({ Message: "Post Request" });
});

app.put("/", (req, res) => {
  res.json({ Message: "Put Request" });
});

app.delete("/", (req, res) => {
  res.json({ Message: "Delete Request" });
});

app.get("/foo", (req, res) => {
  res.json({ foo: "bar" });
});

app.get("/foo/:bar", (req, res) => {
  res.json({ foo: req.params.bar });
});

// Binds the express app to an Azure Function handler
module.exports = createHandler(app);
