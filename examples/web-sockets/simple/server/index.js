const app = require('express')();
const ws = require('express-ws')(app);

app.ws("/chat", function(ws, req) {
  ws.on("open", function() {
    // recibimos una nueva conexi贸n
    console.log('Nueva conexi贸n');
  });

  ws.on("message", function(data) {
    // recibimos un mensaje
    ws.send(`{"message": "馃捇 server", time: ${Date.now()}}`);
    console.log(data);
  });

  ws.on("close", function() {
    // un cliente cerr贸 la conexi贸n
    console.log('Conexi贸n cerrada');
  });
});

app.listen(3001, function() {
  console.log('listening on http://localhost:3001/')
});
