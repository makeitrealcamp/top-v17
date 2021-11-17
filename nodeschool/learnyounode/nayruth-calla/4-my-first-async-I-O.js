const fs = require('fs');
const buf = fs.readFile(process.argv[2],(err,data)=>{
    if(err)throw console.log(err);
    const lines = data.toString().split('\n').length-1
    console.log(lines);
});
