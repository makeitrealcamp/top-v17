const myModule = require('./5-1-modulo')

let directorio = process.argv[2];
let extension = process.argv[3]; 


let callback = function (error, lista) {
    error? console.log("errocito", error) : lista.forEach(element => {
        console.log(element);
    });
}


myModule(directorio, extension, callback)


