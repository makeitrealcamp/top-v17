const fs = require('fs');

const fileText = fs.readFileSync(process.argv[2]).toString();
const numberOfNewlines = fileText.split('\n').length-1

console.log(numberOfNewlines)

