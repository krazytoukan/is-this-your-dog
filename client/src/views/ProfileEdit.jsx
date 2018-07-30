import React from "react";
import axios from 'axios'

const apiClient = axios.create()

class ProfileEdit extends React.Component{
    state ={
        email: "",
        name: "",
        password: ""
    }

    componentDidMount(){
        let id = this.props.match.params.id
        apiClient({method: "get", url: `/api/users/${id}`})
            .then((response) => 
            this.setState({name: response.data.payload, email: response.data.payload.title}))
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value})    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {name, email, password} = this.state
        let id = this.props.match.params.id
        apiClient({method: "patch", url: `/api/users/${id}`, data :{name, email, password}})
            .then(response => {
                this.props.history.push(`/`)
            })
    }

    deleteUser = (e) => {
        let id = this.props.match.params.id
        apiClient({method: "delete", url: `/api/users/${id}`})
            .then(response => (this.props.history.push(`/`)))
    }

    render(){
        let {email, name, password} = this.state
        if(!this.state) {return <h1> Loading... </h1>}
        return (
            <div>
                <h1> {name} </h1>
                <SubmitForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                name= {name}
                email = {email}
                password = {password}
            />
            <button onClick={this.deleteUser}> Delete this user. </button>
            </div>
        )
    }
}

export default ProfileEdit