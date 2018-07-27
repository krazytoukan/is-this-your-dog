import React from 'react'
import axios from 'axios'
import SubmitForm from '../partials/submitform'

const apiClient = axios.create()

class DogFound extends React.Component {

    state = {
        title: "",
        body: "",
        tags: [],
        selectedFile: null
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFileSelect = event => {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // fileUploadHandler = () => {
    //   const fd = new FormData()
    //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    //   // stores file in cloud storage
    // axios.post('my-domain.com/file-upload', fd, {
    //   onUploadProgress: progressEvent => {
    //     console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    //   }
    // })
    //     .then(res => {

    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        const fd = new FormData()
        let { title, body, tags} = this.state
        fd.append('title', title)
        fd.append('body', body)
        fd.append('tags', tags)
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        apiClient.post('/api/posts', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
            }
        })
            .then(response => {
                this.props.history.push('/')
            })
    }
    render() {
        let { title, body, tags} = this.state
        return (
            <div>
                <h1>Dog Found!</h1>
                <p> Did you find some good boy or girl all out there on their lonesome and want to reunite them with their family? Use the form below to post an image, description, and location of the missing pooch to facilitate getting that doggo back with its parents! </p>
                <SubmitForm
                    handleChange={this.handleChange}
                    handleFileSelect={this.handleFileSelect}
                    handleSubmit={this.handleSubmit}
                    title={title}
                    body={body}
                    tags={tags}
                />
            </div>
        )
    }
}

export default DogFound