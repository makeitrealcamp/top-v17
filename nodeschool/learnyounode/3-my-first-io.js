const fs = require('fs')

const buffer = fs.readFileSync(process.argv[2]).toString()
const length = buffer.split('\n')

console.log(length.length-1)

