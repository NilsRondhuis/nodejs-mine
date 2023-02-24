const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { program } = require("commander");
const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const book = await books.getById(id);
      return console.log(book);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    default:
      console.log("Unknown action");
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-t, --title, <type>")
  .option("-at, --author, <type>");

program.parse();

const option = program.opts();
console.log(option);
invokeAction(option);

// --- example yargs
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);
// invokeAction(argv);

// --- example vanilla node.js
// const actionIdx = process.argv.indexOf("--action");
// if (actionIdx !== -1) {
//   const action = process.argv[actionIdx + 1];
//   invokeAction({ action });
// }

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "ck89qe3HriUDHe09TBoJ8" });
// invokeAction({
//   action: "add",
//   title: "Adrenalin",
//   author: "Zlatan Ibrahimović",
// });
// invokeAction({
//   action: "updateById",
//   id: "ck89qe3HriUDHe09TBoJ8",
//   title: "The Home",
//   author: "Axel Rauschmayer",
// });
// invokeAction({ action: "deleteById", id: "ck89qe3HriUDHe09TBoJ8" });
