const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res, next) => {
  res.send('Home Page')
})

app.get('/hello', (req, res, next) => {
  res.send('Hello Page')
})

app.get('/world', (req, res, next) => {
  res.send('World Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})