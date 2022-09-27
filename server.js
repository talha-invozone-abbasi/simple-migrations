const express = require("express");
const http = require("http");
require("dotenv").config();
const port = process.env.PORT || 4000;

const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello");
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(port + " Port is Runing");
});
