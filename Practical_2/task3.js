const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/task3.html')
})

app.get('/hello', (req, res) => {
  res.send('Harsh idhar hai!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})