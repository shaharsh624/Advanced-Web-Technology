const http = require("http");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.end("This is home page");
            break;
        case "/page1":
            res.end("THis is page 1");
            break;
        default:
            res.end("Error")
    }
});

server.listen(3002);
