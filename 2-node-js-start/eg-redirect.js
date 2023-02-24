const express = require("express");

const app = express();

const PORT = 8081;

app.use((req, res) => {
  res.redirect("https://google.com");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error on server launch:", err);
  }
  console.log(`Server works on port ${PORT}`);
});
