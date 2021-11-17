const fs = require('fs');
const path = require('path');
module.exports = (directory,ext,callback)=>{
    const fileExtName = `.${ext}`;
    fs.readdir(directory,(err,files)=>{
        if(err) return callback(err);
        callback(null,files.filter(element => path.extname(element)===fileExtName));
    })
};
