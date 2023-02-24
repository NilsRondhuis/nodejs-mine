const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.json());

// app.post("/home", (req, res) => {
//   console.log(req.body);
//   res.json({ js: "object", body: req.body });
// });

//example client not sent parameter
app.post("/home", (req, res) => {
  if (!req.body.goit) {
    return res.status(400).json({ status: "goit is requared" });
  }
  res.json({ js: "object", body: req.body });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error on server launch:", err);
  }
  console.log(`Server works on port ${PORT}`);
});
