const express = require('express')
const app = express()
const port = 3004
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/task4.html')
})

app.post('/submit', function (req, res) {
    res.send("Your Email: " + req.body.email)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})