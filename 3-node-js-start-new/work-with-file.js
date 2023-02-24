const fs = require("fs/promises");
// const fs = require('fs').promises; it's the same

const fileOperation = async () => {
  try {
    const text = await fs.readFile("./files/file.txt", "utf-8");
    // const buffer = await fs.readFile("./files/file.txt");
    // const text = buffer.toString();
    console.log(text);
  } catch (error) {
    console.log(error);
  }
};

const addText = async () => {
  try {
    await fs.appendFile("./files/file.txt", "\nHello.");
  } catch (error) {
    console.log(error);
  }
};

const replaceFile = async () => {
  try {
    await fs.writeFile("./files/file.txt", "You will be nice fullstack 😎");
  } catch (error) {
    console.log(error);
  }
};

replaceFile();
fileOperation();

//use then/catch
// fs.readFile("./files/file.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

//without promises work with cb
// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
