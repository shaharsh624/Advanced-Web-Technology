const http = require("http");

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.end('Home Page');
            break;
        case '/page1':
            res.end('Page-1');
            break;
        default:
            res.end('Error Page');
            break;
    }
});

server.listen(3002, () => {
    console.log("Server is running on port 3002");

});
