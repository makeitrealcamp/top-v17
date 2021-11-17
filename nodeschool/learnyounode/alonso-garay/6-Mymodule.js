const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {String} folder Contiene el path del directorio
 * @param {String} ext Extension para filtrar los archivos
 * @param {Function} callback Function que se ejecuta al final
 */
function readDir(folder, ext, callback) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            return callback(err)
        }

        const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
        callback(null, filteredFiles)
    });
}

module.exports = readDir;