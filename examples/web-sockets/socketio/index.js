const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const messages = [
  {
    id: 1,
    text: "Hola soy un mensaje",
    author: "khriztianmoreno",
  },
];

app.use(express.static("public"));

app.get("/hello", function (req, res) {
  res.status(200).send("Hello World!");
});

io.on("connection", function (socket) {
  console.log("Alguien se ha conectado con Sockets");
  socket.emit("messages", messages);

  socket.on("new-message", function (data) {
    messages.push(data);

    console.log('Enviar nuevo mensaje')
    io.sockets.emit("messages", messages);
  });
});

server.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});
