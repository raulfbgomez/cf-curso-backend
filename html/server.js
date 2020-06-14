const express = require('express')

const app = express()

app.use('/assets', express.static(`${__dirname}/public/`, {
  etag: false,
  maxAge: '5h'
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.listen(3000)