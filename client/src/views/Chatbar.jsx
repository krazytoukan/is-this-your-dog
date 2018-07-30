import React from 'react'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import io from 'socket.io-client'

const socket = io()


class Chat extends React.Component {

    state = {
        message: "",
        chatList: [],
        visible: true
    }

    handleReceiveMessage(data) {
        this.setState({ chatList: [...this.state.chatList, data] })
    }

    componentDidMount() {
        socket.on('receivemessage', this.handleReceiveMessage.bind(this))
    }

    componentWillUnmount() {
        socket.removeListener('receivemessage', this.handleReceiveMessage.bind(this))
    }

    sendMessage = (evt) => {
        evt.preventDefault
        let data = { user: this.props.currentUser.name, message: this.state.message }
        console.log(data)
        socket.emit("sendmessage", data)
        this.setState({ message: "" })
    }

    handleTextChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    handleButtonClick = () => this.setState({ visible: !this.state.visible })

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const chatList = this.state.chatList.reverse()
        return (
            <div>
                <h5>Chat With Other Users Regarding Pooches (Found or Otherwise)!</h5>
                <input type="text" name="message" placeholder="Message" onChange={this.handleTextChange} />
                <button onClick={this.sendMessage} id="send-chat" >Send</button>
                <div>
                    {chatList.map((message, idx) => {
                        return <div key={idx} className="messages"> {message.user} said {message.message}  </div>
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Chat 