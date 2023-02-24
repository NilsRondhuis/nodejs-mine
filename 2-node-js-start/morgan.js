const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = 8081;

app.use(morgan("tiny"));

//default root path
app.get("/", (req, res) => {
  res.send("get request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error on server launch:", err);
  }
  console.log(`Server works on port ${PORT}`);
});
