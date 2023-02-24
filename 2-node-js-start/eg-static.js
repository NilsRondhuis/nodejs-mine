const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.send("get request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error on server launch:", err);
  }
  console.log(`Server works on port ${PORT}`);
});
