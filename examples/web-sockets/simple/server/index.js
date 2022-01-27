const app = require('express')();
const ws = require('express-ws')(app);

app.ws("/chat", function(ws, req) {
  ws.on("open", function() {
    // recibimos una nueva conexión
    console.log('Nueva conexión');
  });

  ws.on("message", function(data) {
    // recibimos un mensaje
    ws.send(`{"message": "💻 server", time: ${Date.now()}}`);
    console.log(data);
  });

  ws.on("close", function() {
    // un cliente cerró la conexión
    console.log('Conexión cerrada');
  });
});

app.listen(3001, function() {
  console.log('listening on http://localhost:3001/')
});
