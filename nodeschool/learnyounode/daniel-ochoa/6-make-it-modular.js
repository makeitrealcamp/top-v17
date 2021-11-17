const mymodule = require('./6-mymodule.js');
const dirn = process.argv[2];
const ext = process.argv[3];

mymodule (dirn, ext, function(err,files){
    if(err){
        return console.log('El error es: ', err)
    }
    files.forEach(function (file){
        console.log(file)
    })
})