import 'socket.io-client'

const socket = openSocket('http://localhost:3001')

const updateChat = () => {
    socket.on('receivemessage', (data) => {
    socket.emit(data)
})}

export default updateChat