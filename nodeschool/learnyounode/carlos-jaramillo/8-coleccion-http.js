const bl = require("bl");
const http = require("http");

http.get(process.argv[2], function (res) {
  res.pipe(
    bl(function (err, data) {
      if (err) return console.log("hubo un error: ", err);

      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
  //console.log(res);
});
