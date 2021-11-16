const http = require('http');

const map = require('through2-map');

uc = map(function(chunk) {
  return chunk.toString().toUpperCase();
});

server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.pipe(uc).pipe(response);
  }
});
server.listen(process.argv[2]);