const express = require("express");

const app = express();

const PORT = 8081;

// example custom middleware for log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
  next();
});

app.get("/home", (req, res) => {
  res.send("get request");
});

app.post("/home", (req, res) => {
  res.send("post request");
});

app.delete("/home", (req, res) => {
  res.send("delete request");
});

//for all url methods
app.use((req, res) => {
  res.send("middleware request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error on server launch:", err);
  }
  console.log(`Server works on port ${PORT}`);
});
