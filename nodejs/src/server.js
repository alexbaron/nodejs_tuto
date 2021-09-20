"use strict";

const express = require("express");
const morgan = require("morgan");
// var React = require("react");
var router = express.Router();

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// server
const server = express();
//templating
// server.set("views", __dirname + "/views");
// server.set("view engine", "jsx");
// server.engine("jsx", require("express-react-views").createEngine());

server.use(morgan("dev"));

//routing
server.get("/", (req, res) => {
  res.send("Hello World 2 " + req.path);
  console.log(req.query);
  console.log("call from client");
});

server.post("/post", (req, res) => {
  res.send("post req");
});
server.get("/get", (req, res) => {
  res.send("get req");
});

server.use((req, res, suite) => {
  const error = new Error("404 page not found");
  error.status = 404;
  suite(error);
});

server.use((error, req, res) => {
  res.status(error.status || 500);
  res.end(error.message);
});

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = router;
