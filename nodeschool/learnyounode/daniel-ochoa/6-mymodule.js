const fs = require('fs');
const path = require('path');

module.exports = function(dirn, ext, callback) {
    fs.readdir(dirn, function(err, files) {
        if (err) {
            return callback (err)
        }
        
        files=files.filter(function(file){
            return path.extname(file) === '.' + ext
        })
        
        callback(null, files);
    })
}