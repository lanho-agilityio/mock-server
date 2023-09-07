// const jsonServer = require('json-server')
// const cors = require('cors')
// const path = require('path')

// const server = jsonServer.create()
// const router = jsonServer.router(path.join(__dirname, 'tmp/db.json'))
// const middlewares = jsonServer.defaults()
// server.use(cors())
// server.use(jsonServer.bodyParser)
// server.use(middlewares)
// server.use(router)
// const PORT = 8000

// server.listen(PORT, () => {
//   console.log(`JSON Server is running on http://localhost:${PORT}`)
// })
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);