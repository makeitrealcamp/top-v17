const http = require("http");
const bl = require("bl");

const url = process.argv[2];

let response2 = http.get(url, (res) => {
  res.setEncoding("utf8");

  res.pipe(
    bl(function (err, data) {
      const dataString = data.toString('utf8')
      console.log(dataString.length);
      console.log(dataString);
    })
  );
  
});
