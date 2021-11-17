const fs = require('fs')
const path = require('path')

module.exports = function (file, fileExt, callback ) {
    fs.readdir(file,'utf-8',(err,files)=>{               
            if(err) {
                return callback(err);
            }
            let filter=[];
            files.forEach(file => {
                    if (path.extname(file)==='.'+fileExt) {
                        filter.push(file)
                    }
                })           
            return callback(null,filter)
        })  
} 
