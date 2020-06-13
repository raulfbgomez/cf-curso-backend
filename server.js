const http = require('http')

function response(request, response) {
  response.end('Hola Mundo')
}

let server = http.createServer(response)

server.listen(3000)
