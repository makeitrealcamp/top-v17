//commit: node exercise 3
const fs = require('fs');
//console.log(fs)
const text = process.argv[2];
const readText = fs.readFileSync(text).toString();
const lines = readText.split('\n');

console.log(lines.length-1);

