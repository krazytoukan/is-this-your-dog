import React from 'react'
import {updateChat} from '../partials/chatscript'
import {io} from 'socket.io'

const socket = io()


class Chat extends React.Component {

    state = {
        currentUser: null,
        message: "",
        chatList: null
    }

    componentDidMount(){
        this.setState({currentUser: this.props.currentUser.name})
    }

    sendMessage = (evt) => {
        evt.preventDefault
        let data = {user: this.state.currentUser, message: this.state.message}
        socket.emit("sendmessage", data)
        this.setState({message: ""})
    }

    constructor(props){
        super(props)
        updateChat((err, data)=>{
            this.setState({chatList: [...chatList, data]})
        })
    }

    handleTextChange =(e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value})
    }

    render() {
        const chatList = this.state.chatList.reverse()
        return (
            <div>
                <h5>Chat With Other Martian Robots!</h5>
                <input type="text" id="message" placeholder="Message" onChange={handleTextChange} />
                    <button  onClick={sendMessage} id="send-chat" >Send</button>
                    <ul>
                        {chatList.map((message)=>{
                            return <li key={message.key}> ${message.user} said ${message.message}  </li>
                        })
                        }
                    </ul>
            </div>
            )
            }
        }
        
export default Chat 