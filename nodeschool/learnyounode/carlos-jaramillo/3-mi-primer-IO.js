const fs = require("fs");
const data = process.argv[2];
const bufer = fs.readFileSync(data).toString();

let saltos = bufer.split("\n").length - 1;

console.log(saltos);
