// Practical 1: Building a Simple Web Server in Node.js

const http = require('http')

const server = http.createServer((req, res) => {
    res.write("This is the response from the server")
    res.end();
});

server.listen((3001), () => {
    console.log("Server is running");
})