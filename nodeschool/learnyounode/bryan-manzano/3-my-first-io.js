const fs = require('fs')

const thisFile = fs.readFileSync(process.argv[2])

const str = thisFile.toString()

const nl = str.split('\n').length -1 

console.log(nl)