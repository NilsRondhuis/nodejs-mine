const fs = require("fs").promises;
const path = require("path");

// async analog
// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(data);
// });

// sync analog
// const data = fs.readFileSync("test.txt", "utf-8");

(async () => {
  try {
    //reading
    // const data = await fs.readFile("test2.txt", "utf-8");
    //writing
    // const newContent = `${data} I'm here`;
    // await fs.writeFile("test2.txt", newContent, "utf-8");
    //rename and change location
    // await fs.rename("test.txt", "test/test1.txt");
    //readdir
    // console.log(await fs.readdir(path.resolve("test")));
    //deleting
    // await fs.unlink("test2.txt");
    //add some content
    await fs.appendFile("test/test1.txt", " I'm here", "utf-8");
  } catch (error) {
    console.log(error);
  }
})();
