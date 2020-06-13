const express = require('express')

const app = express()

app.use('/assets', express.static(`${__dirname}/public/`));

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname
  })
})

app.listen(3000)