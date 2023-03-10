const express = require("express");
const app = express();
const books = require("./db/books");

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(3000, () => {
  console.log("hello");
});
