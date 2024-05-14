const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    fs.readFile("hello.html", (err, data) => {
        if (err) {
            res.end(err);
        } else {
            res.end(data.toString());
        }
    });

    if (req.url == "/error") {
        res.writeHead((statusCode = 404));
        res.end("<h1>Error!!</h1>");
    }
});

server.listen(3000);
