const fs = require('fs')
const document = process.argv[2]
const buffer = fs.readFileSync(document).toString('utf8').split('\n').length - 1
console.log(buffer);