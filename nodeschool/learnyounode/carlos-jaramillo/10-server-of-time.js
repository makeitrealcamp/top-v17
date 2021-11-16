const net = require("net");
const dateFormat = require("strftime");
const PORT = process.argv[2];

net
  .createServer(function (socket) {
    socket.write(dateFormat("%F %H:%M", new Date()));
    socket.write("\n");
    socket.end();
  })
  .listen(PORT);
