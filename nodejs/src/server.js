"use strict";

const express = require("express");
const morgan = require("morgan");
// var React = require("react");
var router = require("./router");
var mongoose = require("mongoose");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

console.log("start");
mongoose
  .connect("mongodb://alex:tuto1234@mongo:27017/biblio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log("================================");
    console.log(err);
    console.log("================================");
  });

// server
const server = express();
//templating
// server.set("views", __dirname + "/views");
// server.set("view engine", "jsx");
// server.engine("jsx", require("express-react-views").createEngine());

server.use(express.static("public"));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));
server.use("/", router);

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
