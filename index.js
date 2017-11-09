import http                           from 'http'
import Promise                        from 'bluebird'
import mongoose                       from 'mongoose'
import config                         from './config/env'
import app                            from './config/express'
import io                             from './config/socket.io'

const server = http.Server(app)


// promisify mongoose
Promise.promisifyAll(mongoose)

// connect to mongo db
mongoose.connect(config.db, { useMongoClient: true, keepAlive: true, })
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.db}`)
})

const debug = require('debug')('node_scaffolding:index')

// Set Socket.io Server
io(server)

// Set Express Server
server.listen(config.port, () => {
	debug(`server started on port ${config.port} (${config.env})`)
})

export default app
