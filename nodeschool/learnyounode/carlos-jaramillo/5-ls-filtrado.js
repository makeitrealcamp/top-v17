const fs = require("fs");
const path = require("path");

const lista = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(lista, function (error, archivos) {
  if (error) {
    console.log("hubo un error");
  }
  archivos.forEach((archivo) => {
    if (path.extname(archivo) === ext) {
      console.log(archivo);
    }
  });
});
