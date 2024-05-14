const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const file = "log.txt";

    // Write
    const content1 = "This is log file.\n";
    fs.writeFile(file, content1, (err) => {
        if (err) {
            res.end(err);
        } else {
            res.write("File created succesfully\n\n");
        }
    });

    // Append
    const content2 = "This is log file again.\n";
    fs.appendFile(file, content2, (err) => {
        if (err) {
            res.end(err);
        } else {
            res.write("Appended in file\n");
        }
    });

    // Read
    fs.readFile(file, (err, data) => {
        if (err) {
            res.end(err);
        } else {
            res.write("Content: \n" + data);
        }
    });

    // Delete
    fs.unlink(file, (err) => {
        if (err) {
            res.end(err);
        } else {
            res.end("File deleted succesfully\n");
        }
    });
});

server.listen(3000);
