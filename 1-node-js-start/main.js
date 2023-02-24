const Calc = require("calc-js").Calc;
const { getCurrentDate } = require("./dateUtils");

console.log(process.argv);
const [, , a, b] = process.argv;

console.log(new Calc(parseFloat(a)).sum(parseFloat(b)).finish());

const sum = (a, b) => {
  return a * b;
};

console.log(sum(a, b));

//export modules
// console.log(getCurrentDate);

//global
// console.log(global.hello);

//process env/argv/exit
// process.exit();
// console.log(process.argv);

//__dirname __filename
// console.log(__filename);
