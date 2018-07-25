import React from 'react'
import axios from 'axios'

const apiClient = axios.create()

class DogFound extends React.Component{

    state = {
        selectedFile: null
    }

    fileSelectedHandler = (evt) => {
        this.setState({selectedFile: evt.target.files[0]})
    }

    onSubmit = (event) => {
        event.preventDefaultl
        this.fileUpload(this.state.selectedFile)
    }

    fileUpload = (file) => {
        const url = "place-holder"
        const fd = new FormData()
        fd.append('image', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return apiClient.post(url, fd, config)
    }

    render(){
        return(
            <div>
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.onSubmit}> Upload </button>
            </div>
        )
    }
}