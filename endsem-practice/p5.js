const http = require("http");
const fs = require("fs");
const os = require("os");
const url = require("url");
const util = require("util");
const path = require("path");
const serveIndex = require("serve-index");
const events = require("events");
const eventEmitter = new events.EventEmitter();

const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const myFunc = require("./myMiddleware.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use(serveIndex(__dirname + "/public"));
// app.use((req, res) => {
//     res.cookie("name", "value");
//     res.send("Cookie Saved");
// });

app.get("/home", (req, res, next) => {
    res.send("Home Page");
    next();
});

// Redirect
app.get("/hello", (req, res, next) => {
    res.redirect("/world");
});

app.get("/world", (req, res, next) => {
    const time = `Time: ${Date.now()}`;
    res.send("World Page...might be redirected from hello page<br>" + time);
    console.log("Cookies: ", req.cookies);
    console.log("Signed Cookies: ", req.signedCookies);
});

app.get("/form", (req, res, next) => {
    res.sendFile(__dirname + "/form.html");
});

app.post("/submit", function (req, res) {
    res.json({
        "First Name": req.body.fname,
        "Last Name": req.body.lname,
        "Full Name": myFunc.myFunction1(req.body.fname, req.body.lname).merge(),
    });
    console.log(
        "Full Name: " +
            myFunc.myFunction2(req.body.fname, req.body.lname).merge()
    );
});

// HTTP Server
const server = http.createServer((req, res) => {
    // OS Module
    res.write("OS Module\n");
    res.write("\nTotal Memory: " + os.totalmem());
    res.write("\nFree Memory: " + os.freemem());
    res.write("\nMachine: " + os.machine());

    // URL Module
    const adr = "http://localhost:8080/default.htm?year=2017&month=february";
    var q = url.parse(adr, true);
    const queryData = q.query;

    res.write("\n\n\nURL Module\n");
    res.write("\nHREF: " + q.href);
    res.write("\nProtocol: " + q.protocol);
    res.write("\nHost: " + q.host);
    res.write("\nPort: " + q.port);
    res.write("\nPath: " + q.path);
    res.write("\nPath Name: " + q.pathname);
    res.write("\nSearch: " + q.search);
    res.write("\nQuery - Month: " + queryData.month);
    res.write("\nQuery - Year: " + queryData.year);

    // UTIL Module
    var text = "\nCongratulations! %s on getting %d marks";
    var result = util.format(text, "Pushkar", 99);

    res.write("\n\n\nUTIL Module\n");
    res.write(result);

    // Path Module
    var filePath = "/Users/Refsnes/demo_path.js";
    var directories = path.dirname(filePath);
    var file = path.basename(filePath);
    var pathToJoin = path.join("Users", "Refsnes", "demo_path.js");
    var pathToNormalize = path.normalize("Users/Refsnes/../Jackson");

    res.write("\n\n\nPATH Module\n");
    res.write("\nDirectories: " + directories);
    res.write("\nFile Name: " + file);
    res.write("\nJoin Path: " + pathToJoin);
    res.write("\nNormalized Path: " + pathToNormalize);

    // EventEmitter
    const myFunc1 = (num) => {
        console.log(num * 2);
    };
    eventEmitter.on("doubleEmitter", myFunc1);
    eventEmitter.emit("doubleEmitter", 2);

    // FS Module
    const fileName = "log.txt";

    const content1 = "This is log file.\n";
    fs.writeFile(fileName, content1, (err) => {
        if (err) {
            res.write(err);
        } else {
            res.write("File created succesfully\n\n");
        }
    });

    const content2 = "This is log file again.\n";
    fs.appendFile(fileName, content2, (err) => {
        if (err) {
            res.write(err);
        } else {
            res.write("Appended in file\n");
        }
    });

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.end(err);
        } else {
            res.write("Content: \n" + data);
        }
    });

    fs.unlink(fileName, (err) => {
        if (err) {
            res.write(err);
        } else {
            res.write("File deleted succesfully\n");
        }
    });

    res.end();
});

// HTTP on 3000 and Express on 3001
server.listen(3000);
app.listen(3001);
