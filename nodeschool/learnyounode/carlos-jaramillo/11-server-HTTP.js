const http = require("http");
const fs = require("fs");
const PORT = process.argv[2];
const rute = process.argv[3];

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    fs.createReadStream(rute, "utf-8").pipe(res);
  })
  .listen(Number(PORT));
