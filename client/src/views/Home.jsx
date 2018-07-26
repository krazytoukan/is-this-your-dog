import React from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

const apiClient= axios.create()

class Home extends React.Component {

    state = {
        dogs: []
    }
    
    componentDidMount(){
        apiClient({method: "get", url: "/api/posts"})
        .then((response) => {
            let pooches = response.data.payload.reverse()
            this.setState({dogs: pooches})})
    }
    
    render(){
        const dogs = this.state.dogs
        return(
            <div className="home">
            <h1>Is This Your Dog?!</h1>
            <p> Is this your dog? We are a crowdsourced website which allows users to post photos of dogs they have found (or that they just took a really good photo of!) so that their owners can easily find their missing poocherinos quickly and, hopefully, without too much worry.  Found a dog? Post its photo, location, and description here! </p>
            <div>
                {dogs.map((dog)=> {
                    return(
                        <div key={dog._id}>
                            <h3> {dog.title} </h3>
                            <Link to ={`/dogs/${dog._id}`}>  <img src={dog.featuredImageUrl} /> </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
}

export default Home