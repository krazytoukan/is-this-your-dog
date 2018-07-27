import React from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

const apiClient= axios.create()

class Home extends React.Component {

    state = {
        dogs: [],
        search: ""
    }
    
    componentDidMount(){
        apiClient({method: "get", url: "/api/posts"})
        .then((response) => {
            let pooches = response.data.payload.reverse()
            this.setState({dogs: pooches})})
    }
    
    handleChange = (e) => {
        e.preventdefault
        this.setState({ search: e.target.value })
    }

    render(){
        const result = this.state.dogs.filter((dog)=>{
            return dog.tags.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return(
            <div className="home">
            <h1>Is This Your Dog?!</h1>
            <p> Is this your dog? We are a crowdsourced website which allows users to post photos of dogs they have found (or that they just took a really good photo of!) so that their owners can easily find their missing poocherinos quickly and, hopefully, without too much worry.  Found a dog? Post its photo, location, and description here! </p>
            <input className="input is-large" type="text" placeholder="Narrow the search for your dog by putting in possible tags that may have been added." onChange={this.handleChange} />
            <div>
                {result.map((dog)=> {
                    return(
                        <div key={dog._id}>
                            <h3> {dog.title} </h3>
                            <Link to ={`/dogs/${dog._id}`}>  <img src={dog.featuredImageUrl} /> </Link>
                            <h5> {dog.tags}</h5>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
}

export default Home