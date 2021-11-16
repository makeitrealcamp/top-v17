const fs = require('fs')
const path = require('path')

let directorio = process.argv[2];
let extension = process.argv[3];

let listaFinal


function leeme(error, lista) {

    if (error) {
        return error

    } else {   

        listaFinal = lista.filter(name => path.extname(name) == "."+extension)
        listaFinal.forEach(element => {
            console.log(element);
        });
        return lista
    }

}

fs.readdir(directorio, leeme)