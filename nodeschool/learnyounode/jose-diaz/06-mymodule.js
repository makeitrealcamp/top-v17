const fs = require('fs')
const path = require('path')

module.exports = function (folderPath, fileExt, callback ) {
    fs.readdir(folderPath,'utf-8',(err,files)=>{               
            if(err) {
                return callback(err);
            }
            const filteredPaths = []
            files.forEach(file => {
                    if (path.extname(file)==='.'+fileExt) {
                        filteredPaths.push(file)
                    }
                })           
        
            return callback(null,filteredPaths)
        })  
} 
