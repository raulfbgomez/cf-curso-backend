const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))

app.use('view engine', 'pug')

// let db = new sqlite3.Database('project-backend') // Crea una nueva DB

// const sequelize = new Sequelize('project-backend', null, null, {
//   dialect: 'sqlite',
//   storage: './project-backend'
// })

// db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))') solo se ejecuta una vez ya que despues marcara error

app.post('/pendientes', function(req, res) {
  // db.run(`INSERT INTO tasks(description) VALUES (?)`, req.body.description)
  res.send('Insert ok')
})

app.listen(3000)

// process.on('SIGINT', function() {
//   console.log('Server Off')
//   db.close()
//   process.exit() // Cerrar el servidor de node desde el codigo
// })