// Set And Instance SocketIO
import socketIO                       from 'socket.io'
import logger                         from './winston'

export default function (server) {
  const io = socketIO(server)

  io.on('connection', (socket) => {
    logger.log('debug', 'a user connected')

    // Event for User disconnect
    socket.on('disconnect', () => {
      logger.log('debug', 'user disconnected')
    })

    // Event for New Messages
    socket.on('chat message', (msg) => {
      logger.log('debug', 'message: ' + msg)
    })
  })

  io.on('error', (err) => {
    logger.log('error', 'socketIO Error: ', err)
  })
}
