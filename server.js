const express = require('express')

const app = express()

app.get('/saludo', function(req, res) {
  res.send(`Hello ${req.query.name}`)
})

app.listen(3000)