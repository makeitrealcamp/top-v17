const fs = require('fs')
const path = require('path')

const MiFuncion = (directorio, extension, callback) =>{

    fs.readdir(directorio, (error, lista)=>{
        if (error) {
            return callback(error);

        } else {   
            listaFinal = lista.filter(name => path.extname(name) == "."+extension)
            
            return callback(null,listaFinal)
        }
    })    

}

module.exports = MiFuncion