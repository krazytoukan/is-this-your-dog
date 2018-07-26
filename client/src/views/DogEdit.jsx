import React from "react";
import SubmitForm from '../partials/submitform'
import axios from 'axios'

const apiClient = axios.create()

class Edit extends React.Component{
    state ={
        dog: null,
        title: "",
        body: ""
    }

    componentDidMount(){
        let id = this.props.match.params.id
        apiClient({method: "get", url: `/api/posts/${id}`})
            .then((response) => 
            this.setState({dog: response.data.payload, title: response.data.payload.title, body: response.data.payload.body}))
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value})    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {title, body} = this.state
        let id = this.props.match.params.id
        apiClient({method: "patch", url: `/api/posts/${id}`, data :{title, body}})
            .then(response => {
                this.props.history.push(`/posts/${id}`)
            })
    }

    render(){
        let {dog, title, body} = this.state
        if(!this.state.dog) {return <h1> Loading... </h1>}
        return (
            <div>
                <h1> {dog.title} </h1>
                <SubmitForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                title= {title}
                body = {body}
            />
            </div>
        )
    }
}

export default Edit