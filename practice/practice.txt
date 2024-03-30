// HTTP
var http = require("http");
var server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

server.listen(7000);

// EXPRESS
var express = require("express");
var app = express();

app.post("/submit", (req, res) => {
    res.send(req.body.hello);
});

// MY MIDDLEWARE
const myComponent = function (req, res, next) {
    console.log("My Component");
    next();
};

app.use(myComponent);

app.get("/", (req, res) => {
    console.log(req.myComponent);
});

app.listen(3000, () => {
    console.log("Server started on port");
});

// EVENT EMITTER
const events = require("events");
const eventEmitter = new events.EventEmmiter();

eventEmitter.on("myFunc", function () {
    console.log("My Function");
});

eventEmitter.emit("myFunc");
