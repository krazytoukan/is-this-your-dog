import io from 'socket.io-client'

const socket = io('http://localhost:3001')

const updateChat = (cb) => {
    socket.on('receivemessage', cb)
}

export default updateChat;