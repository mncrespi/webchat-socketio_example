// Set And Instance SocketIO
import socketIO                       from 'socket.io'
import logger                         from './winston'

export default function (server) {
  const io = socketIO(server)

  io.on('connection', (socket) => {
    logger.log('debug', 'a user connected')
  })

  io.on('error', (err) => {
    logger.log('error', 'socketIO Error: ', err)
  })
}
