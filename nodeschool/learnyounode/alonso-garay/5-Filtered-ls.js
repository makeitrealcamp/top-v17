fs = require('fs');
path = require('path');

const folder = process.argv[2];
const ext = `.${process.argv[3]}`;

const read = (file) => {
    if(path.extname(file) === ext) {
        console.log(file);
    }
}

const dirRead = (err, files) => {
    if (err) return console.error(err);

    files.forEach(read);
}

fs.readdir(folder, dirRead)