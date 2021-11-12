const fs = require('fs');

file = process.argv[2];

//Ojo esta funcion es asincrona
fs.readFile(file,'utf-8',(err,data) => {
    if (err) {
        console.log("Error!")
    } else {
        lines = data.split('\n').length-1
        console.log(lines)
    }
})

