const readDir = require('./6-Mymodule');

const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];

readDir(dir, ext, function (err, list = []) {
    if(err) {
        return console.error('There was an error', err);
    }

    list.forEach(file => console.log(file))
})