const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    // Writing in file
    const content = "This is log file.\n";
    fs.writeFile("log.txt", content, function (err) {
        if (err) throw err;
        console.log("Create a new file log.txt");
    });

    // Appending in file
    fs.appendFile("log.txt", content, (err) => {
        if (err) throw err;
    });

    // Reading file
    fs.readFile("log.txt", function (err, data) {
        res.write(data);
    });

    // Deleting a file
    fs.unlink("log.txt", function (err) {
        if (err) throw err;
        console.log("Deleted log.txt");
        res.end();
    });
});

server.listen(3003, () => {
    console.log("Server is Running");
});
