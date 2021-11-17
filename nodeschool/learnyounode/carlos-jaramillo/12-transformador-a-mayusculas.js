const http = require("http");
const mapp = require("through2-map");
const PORT = process.argv[2];

http
  .createServer((req, res) => {
    if (req.method !== "POST") {
      return res.end("Send me a POST\n");
    }
    req
      .pipe(
        mapp(function (chunk) {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  })
  .listen(Number(PORT));
