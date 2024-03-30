const http = require("http");

const server = http.createServer((req, res) => {
    res.write("This is the response from the server");
    res.end();
});

server.listen(3001, () => {
    console.log("Server running on port 3000");
});
