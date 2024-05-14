const http = require("http");

const server = http.createServer((req, res) => {
    res.write("This is from node");
    res.end("Hello World");
});

server.listen(3001, () => {
    console.log("Running on port 3001");
});
