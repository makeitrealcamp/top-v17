const fs = require('fs')
const mod = require('./6-mymodule.js')

const dir = process.argv[2]
const ext = process.argv[3]

mod(dir, ext, function(err, data){
    if (err){
        return console.log('Error')
    }
    else {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        };
    }
})
