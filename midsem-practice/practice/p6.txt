// Event Emmiter
const events = require("events");
const eventEmitter = new events.EventEmitter();

const myHelloEventHandler = () => console.log("someone says hello to me...");
eventEmitter.on("hello", myHelloEventHandler);
eventEmitter.emit("hello");

// OS Module
const os = require("os");
console.log("Total Memory: " + os.totalmem() / 1024 / 1024 / 1024);
console.log("Free Memory: " + os.freemem() / 1024 / 1024 / 1024);

// URL Module
const url = require("url");
const adr = "http://localhost:8080/default.htm?year=2017&month=february";
var q = url.parse(adr, true);

console.log("Host: " + q.host); //returns 'localhost:8080'
console.log("Path Name: " + q.pathname); //returns '/default.htm'
console.log("Query: " + q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log("Month in query: " + qdata.month); //returns 'february'

// Listing Directory Contents
var express = require("express");
var serveIndex = require("serve-index");

var app = express()
    .use(express.static(__dirname + "/public"))
    .use(serveIndex(__dirname + "/"))
    .use(function (req, res) {
        res.cookie("name", "harshShah");
        res.end("Hello!");
    });

app.listen(3006);
