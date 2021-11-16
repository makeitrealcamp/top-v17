const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2]).toString()
let length = buffer.split('\n').length - 1

console.log(length)

