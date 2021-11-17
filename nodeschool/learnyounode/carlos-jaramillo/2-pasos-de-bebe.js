const data = process.argv.slice(2);
const toNum = [];

data.forEach((el) => toNum.push(Number(el)));

let sum = toNum.reduce((a, b) => a + b);

console.log(sum);
