const myModule = require("./6.2-mymodule")
const fnCallBack = (err, dataArray) =>{
    if(err)
    {
        throw err;
    }   
    dataArray.forEach(data => {
        console.log(data)        
    });            
}

myModule(process.argv[2], process.argv[3], fnCallBack)

