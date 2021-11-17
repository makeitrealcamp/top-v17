const fs = require('fs');
const path = require('path');

let dirn = process.argv[2];
let ext = '.' + process.argv[3];

fs.readdir(dirn, function(err, files) {
    if (err) {
        return console.log ('El error es',err)
    }
    files.forEach(function(file){
        if (path.extname(file) === ext) {
            console.log (file)
        }
    })
})
