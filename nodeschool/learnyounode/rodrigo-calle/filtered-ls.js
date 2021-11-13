//commit: node exercise 5
const fs = require('fs');

const directory = process.argv[2]
const ext = '.'+process.argv[3]
//console.log(path, ext)


function myFilter(err, list) {
    if(err){
        console.log('the error is: '+err);
    }else{        
        list.forEach(e => {
            if(e.toString().search(ext) != -1){
                console.log(e)
            }
        });
    }    
}


fs.readdir(directory, myFilter)