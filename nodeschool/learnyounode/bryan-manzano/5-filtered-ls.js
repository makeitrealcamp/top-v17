const fs = require('fs')
const ext = process.argv[3]
fs.readdir(process.argv[2], function(err, data){
    if (err){
        return err
    }
    const dd = data.map(file => {
        let arr = file.split(".")
        if (arr[1] === ext){
            console.log(file)
        }
    })
    //console.log(dd)
})