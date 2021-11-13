`use strict`
const fs = require('fs');
const path = require('path');

folderPath = process.argv[2];

fs.readdir(folderPath,'utf-8',(err,files)=>{
    if(err) {
        console.log(`Error reading: ${folderPath}`)
    } else {
        files.forEach(file => {
            if (path.extname(file)==='.md') {
                console.log(file)
            }
        })
    }
});
