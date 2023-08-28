const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const express = require('express')

const server = express()
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use('/api', jsonServer.router('db.json'));
server.use(middlewares)
const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
