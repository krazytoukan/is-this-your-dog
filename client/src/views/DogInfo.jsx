import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Image} from "semantic-ui-react"

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
            <h1> {dog.title} </h1>
            <h2> {dog.body} </h2>
            <Image src={dog.featuredImageUrl} circular bordered centered />
            <h3> Dog Tags : {dog.tags} </h3>
        {currentUser && dog._by === currentUser._id && (
            <Button color="yellow"><Link to={`/dogs/${this.state.dog._id}/edit`}> Edit this post </Link> </Button>
            )
        }
        </div>
        )
    }
}

export default SingleDog