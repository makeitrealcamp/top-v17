const fs = require('fs')

module.exports = function exportFunction(dirName,ext,callback){  
    fs.readdir(dirName, function (err,list) {
        if(err){
            return callback(err)
        }
        else{
            list = list.filter((el) => {
                return el.indexOf("."+ext) > -1
            });               
            return callback(null,list)              
        }
    })    
}