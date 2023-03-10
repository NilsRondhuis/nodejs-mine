const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const bookPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const data = await fs.readFile(bookPath);
  return JSON.parse(data);
};

const getById = async (bookId) => {
  const data = await getAll();
  const book = data.find((item) => item.id === bookId);
  return book || null;
};

const add = async (newBook) => {
  const data = await getAll();
  const book = {
    id: nanoid(),
    ...newBook,
  };
  data.push(book);
  await fs.writeFile(bookPath, JSON.stringify(data, null, 2));
  return book;
};

const update = async (id, updatedBook) => {
  const data = await getAll();
  const idx = data.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  data[idx] = { id, ...updatedBook };
  await fs.writeFile(bookPath, JSON.stringify(data, null, 2));
  return data[idx];
};

const deleteById = async (id) => {
  const data = await getAll();
  const idx = data.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const [result] = data.splice(idx, 1);
  await fs.writeFile(bookPath, JSON.stringify(data, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteById,
};
