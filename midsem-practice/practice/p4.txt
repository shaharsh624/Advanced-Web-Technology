const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const myFunc = require("./myMiddleware.js");

// Event Emmiter
const events = require("events");
const eventEmitter = new events.EventEmitter();

const myEventHandler = function (req, res) {
    console.log("My Event Emitter called...do whatever you want to do")
};

eventEmitter.on("hello", myEventHandler);


// GET
app.get("/", (req, res, next) => {
    res.send("Home Page");
});

app.get("/world", (req, res, next) => {
    const time = `Time: ${Date.now()}`;
    res.send("World Page...might be redirected from hello page<br>" + time);
    console.log("Cookies: ", req.cookies);
    console.log("Signed Cookies: ", req.signedCookies);
});

// Redirect
app.get("/hello", (req, res, next) => {
    // res.send('Hello Page')
    res.redirect("/world");
});

// Rendering HTML files
app.get("/file", (req, res) => {
    res.sendFile(__dirname + "/hello.html");
});

// POST
app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/form.html");
});

app.post("/submit", function (req, res) {
    // res.send("Submitted Name: " + req.body.fname + " " + req.body.lname);
    res.json({
        "First Name": req.body.fname,
        "Last Name": req.body.lname,
        "Full Name": myFunc.myFunction1(req.body.fname, req.body.lname).merge(),
    });
    console.log("Full Name: " + myFunc.myFunction2(req.body.fname, req.body.lname).merge());
    eventEmitter.emit("hello");
});

// User defined middleware
const myComponent = function (req, res, next) {
    console.log("This is my own component");
    next();
};
app.use(myComponent);

// User defined middleware
const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};
app.use(requestTime);

app.get("/component", (req, res, next) => {
    res.send("Component used...see console");
    console.log("Requested at: " + req.requestTime);
});

app.listen(3004, () => {
    console.log("Server running on port 3004");
});
