var http = require('http');
var url = require('url');

var routes = {
  "/api/parsetime": function(parsedUrl) {
    date = new Date(parsedUrl.query.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}

server = http.createServer(function(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const resource = routes[parsedUrl.pathname];
  
  
  if (resource) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));