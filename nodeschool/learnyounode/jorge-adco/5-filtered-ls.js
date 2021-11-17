const fs = require('fs')
const path= require('path');
const ext='.'+process.argv[3];
const file = process.argv[2]
const readMyFile = (err,files) => {
    if(err){
        console.log(err);
    }
    else{
        files.forEach(file => {
            if (path.extname(file)===ext) {
                console.log(file);
            }
        })
    }
}
fs.readdir(file, readMyFile);