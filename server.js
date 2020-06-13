const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/saludo', function(req, res) {
  res.send(`Hello ${req.query.name}`)
})

app.post('/', function(req, res) {
  res.send(`Hello ${req.body.name}`)
})

app.listen(3000)