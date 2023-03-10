const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/contacts", (req, res) => {
  res.send("<h1>Contacts page</h1>");
});

app.listen(3000, () => {
  console.log("I am listening port 3000");
});
