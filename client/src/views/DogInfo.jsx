import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const apiClient = axios.create()


class SingleDog extends React.Component{
    state = {
        dog : null
    }

    componentDidMount(){
        apiClient({method: "get", url: `/api/posts/${this.props.match.params.id}`})
        .then((response)=> { 
            this.setState({dog: response.data.payload})})
    }

    render(){
        if(!this.state.dog){return <h1> Loading </h1>}
        const {currentUser} = this.props
        const {dog} = this.state
        return(
        <div>
            <h1> {this.state.dog.title} </h1>
            <h2> {this.state.dog.body} </h2>
            <img src={this.state.dog.featuredImageUrl} />
        {currentUser && dog._by === currentUser._id && (
            <Link to={`/dogs/${this.state.dog._id}/edit`}> Edit this post </Link>)
        }
        </div>
        )
    }
}

export default SingleDog