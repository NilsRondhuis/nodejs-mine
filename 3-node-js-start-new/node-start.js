//import for npm package
const nodemon = require("nodemon");

//import for my file
const users = require("./commonjs-module");

//using destructuring
const { admins } = require("./commonjs-module");

//method import from folder with index.js
// const { getCurrentMonth } = require("./date");
// const month = getCurrentMonth();

//immediately calling
const getCurrentMonth = require("./date").getCurrentMonth();

console.log(`${getCurrentMonth} February`);
