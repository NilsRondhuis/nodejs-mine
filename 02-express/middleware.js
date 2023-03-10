const express = require("express");
const app = express();
const moment = require("moment");
const fs = require("fs").promises;
const cors = require("cors");
const books = require("./db/books");

app.use(cors());

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./log/server.log", `\n${method}, ${url}, ${date}`);
  next();
});

app.get("/products", (req, res) => {
  res.send([]);
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
  next();
});

app.listen(3000, () => {
  console.log("hello");
});
