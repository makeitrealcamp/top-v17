const filterExt = require('./6-1-mymodule');
filterExt(process.argv[2],process.argv[3],(err,files)=>{
    if(err)throw console.log(err)
    files.forEach(element => console.log(element));
});
