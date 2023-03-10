const books = require("../models/books");
const helper = require("../helpers");

const getBooks = async (req, res) => {
  const result = await books.getAll();
  res.json(result);
};

const getById = async (req, res) => {
  const result = await books.getById(req.params.id);
  if (!result) {
    throw helper.HttpError(404, "NotFound");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await books.add(req.body);
  res.status(201).json(result);
};

const update = async (req, res) => {
  const result = await books.update(req.params.id, req.body);
  if (!result) {
    throw helper.HttpError(404, "NotFound");
  }
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const result = await books.deleteById(req.params.id);
  if (!result) {
    throw helper.HttpError(404, "NotFound");
  }
  res.status(200).json(result);
};

module.exports = {
  getBooks: helper.ctrlWrapper(getBooks),
  getById: helper.ctrlWrapper(getById),
  add: helper.ctrlWrapper(add),
  update: helper.ctrlWrapper(update),
  deleteById: helper.ctrlWrapper(deleteById),
};
