const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);

    switch (req.url) {
        case "/":
            res.end("<h1>Hello World</h1>");
            break;
        case "/hello":
            res.end("<h1>About Hello World</h1>");
            break;
        case "/information":
            fs.readFile("hello.html", (error, data) => {
                if (error) {
                    res.end("Internal Server Error");
                } else {
                    res.end(data.toString());
                }
            });
            break;
        default:
            res.end(
                "<h1>Not found</h1> <p> Hey this page is not found... </p>"
            );
            break;
    }
});

server.listen(3005, () => {
    console.log("Server is running on port 3000");
});
