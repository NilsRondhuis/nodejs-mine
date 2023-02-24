const express = require("express");

const app = express();

const PORT = 8081;

// for html forms
app.use(express.urlencoded({ extended: true }));

app.post("/home", (req, res) => {
  console.log(req.body);
  res.json({ js: "object", body: req.body });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error on server launch:", err);
  }
  console.log(`Server works on port ${PORT}`);
});
