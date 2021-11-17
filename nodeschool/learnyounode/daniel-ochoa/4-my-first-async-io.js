const fs = require('fs');

const file = process.argv[2];


function readMyFile(err,contents) {
    
    if (err){
        return console.log('EL GRAVE ERROR', err)
    } else {
        const lines = contents.toString().split('\n').length-1
        console.log(lines)
    }
}

fs.readFile(file, readMyFile)