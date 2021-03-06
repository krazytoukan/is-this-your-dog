import React from "react";
import SubmitForm from '../partials/submitform'
import axios from 'axios'
import {Button, Container} from 'semantic-ui-react'

const apiClient = axios.create()

class Edit extends React.Component{
    state ={
        dog: null,
        title: "",
        body: "",
        tags: ""
    }

    componentDidMount(){
        let id = this.props.match.params.id
        apiClient({method: "get", url: `/api/posts/${id}`})
            .then((response) => 
            this.setState({dog: response.data.payload, title: response.data.payload.title, body: response.data.payload.body, tags: response.data.payload.tags}))
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value})    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {title, body, tags} = this.state;
        let id = this.props.match.params.id
        apiClient({method: "patch", url: `/api/posts/${id}`, data :{title, body, tags}})
            .then(response => {
                this.props.history.push(`/dogs/${id}`)
            })
    }

    deletePost = (e) => {
        let id = this.props.match.params.id
        apiClient({method: "delete", url: `/api/posts/${id}`})
            .then(response => (this.props.history.push(`/`)))
    }

    render(){
        let {dog, title, body, tags} = this.state
        if(!this.state.dog) {return <h1> Loading... </h1>}
        return (
            <Container>
            <div>
                <h1> {dog.title} </h1>
                <SubmitForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                title= {title}
                body = {body}
                tags = {tags}
            />
            <Button negative onClick={this.deletePost}> Delete this post </Button>
            </div>
            </Container>
        )
    }
}

export default Edit