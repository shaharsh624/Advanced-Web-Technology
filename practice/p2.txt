const http = require("http");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.write("home Page");
            res.end();
            break;
        case "/page1":
            res.write("Page 1");
            res.end();
            break;
        default:
            res.end("Error");
            break;
    }
});

server.listen(3002, () => {
    console.log("Running on port 3002");
});
