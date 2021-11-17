const fs = require('fs')

const file = process.argv[2];

function readMyFile(err, contents){
    if(err){
        console.log(err)
    }else{
        const lines = contents.toString().split('\n').length - 1;
        return console.log(lines)
    }
}

fs.readFile(file,readMyFile)

