const bl = require("bl");
const http = require("http");
http.get(process.argv[2], function (response) {
  response.pipe(bl((err, data)=>{
      if (err) {
        return console.log(err);
      } 
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
