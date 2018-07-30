import React from 'react'
// import updateChat from '../partials/chatscript'
import io from 'socket.io-client'

const socket = io()


class Chat extends React.Component {

    state = {
        message: "",
        chatList: []
    }

    handleReceiveMessage(data) {
        this.setState({chatList: [...this.state.chatList, data]})
    }

    componentDidMount(){
        socket.on('receivemessage', this.handleReceiveMessage.bind(this))
    }

    componentWillUnmount() {
        socket.removeListener('receivemessage', this.handleReceiveMessage.bind(this))
    }

    sendMessage = (evt) => {
        evt.preventDefault
        let data = {user: this.props.currentUser.name, message: this.state.message}
        console.log(data)
        socket.emit("sendmessage", data)
        this.setState({message: ""})
    }

    handleTextChange =(e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        const chatList = this.state.chatList.reverse()
        return (
            <div>
                <h5>Chat With Other Martian Robots!</h5>
                <input type="text" name="message" placeholder="Message" onChange={this.handleTextChange} />
                    <button  onClick={this.sendMessage} id="send-chat" >Send</button>
                    <ul>
                        {chatList.map((message, idx)=>{
                            return <li key={idx}>{message.user} said {message.message}  </li>
                        })
                        }
                    </ul>
            </div>
            )
            }
        }
        
export default Chat 