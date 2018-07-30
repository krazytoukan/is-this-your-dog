import React from 'react'
import httpClient from "../httpClient"
import {Button, Input, Container} from 'semantic-ui-react'

class LogIn extends React.Component{
    state = {
        fields : {email: '', password: ''}
    }

    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        httpClient.logIn(this.state.fields)
            .then(((user) => {
                this.setState({fields: {email: '', password: ''}})
                if(user){
                    this.props.onLogInSuccess()
                    this.props.history.push('/')
                }
        }))
    }

    render(){
        const {email} = this.state.fields
        const {password} = this.state.fields
        return(
            <div className="LogIn">
                <div className="row">
                <div className="column column-33 column-offset-33">
                <h1> Log In </h1>
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                        <Input type="text" placeholder="Email" name="email" autoComplete="off" value={email} size="big" />
                        <Input type="password" placeholder="Password" name="password" autoComplete="off" value={password}  size="big"/>
                        <Button positive size="big"> Log In </Button>
                    </form>
                </div>
            </div>
        </div>
                    
        )
    }
}

export default LogIn