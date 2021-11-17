
const fs = require('fs')
let files = []

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, data){
    if (err){
        return callback(err)
    }
    const dd = data.map(file => {
        let arr = file.split(".")
        if (arr[1] === ext){
            files.push(file)
        }
    })
    //console.log(dd)
    callback(null, files)
})
}