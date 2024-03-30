const express = require('express')
const port = 3005

const app = express()

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
app.use(myLogger)

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  
