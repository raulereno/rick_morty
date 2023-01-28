const express = require("express");
const routes = require("./routes/index");
const server = express();

//Important: Put express json middleware before the routes
server.use(express.json());
server.use("/", routes);

server.get("/", (req, res) => {
  res.json("ruta principal");
});

module.exports = server;
