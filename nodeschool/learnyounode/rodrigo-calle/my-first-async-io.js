//commit: node exercise 4
const fs = require('fs')

const text = process.argv[2]

function countLines(err, content) {     
    if(err){
       return console.log(err)
    }else{
       const lines = content.toString().split('\n').length -1;
       console.log(lines)
    }
}

fs.readFile(text, countLines);



