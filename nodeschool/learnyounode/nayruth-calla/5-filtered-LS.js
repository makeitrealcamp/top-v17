const fs = require('fs');
const patch = require('path');
fs.readdir(process.argv[2],((err,files)=>{
    if(err) throw console.log(err)
    files.filter(ext =>patch.extname(ext)==`.${process.argv[3]}`).forEach(file=>console.log(file))    
    }));