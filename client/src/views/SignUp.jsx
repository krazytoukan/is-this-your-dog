import React from 'react'
import httpClient from '../httpClient'
import { Button, Input, Container } from 'semantic-ui-react'

class SignUp extends React.Component {
    state = {
        fields: { name: '', email: '', password: '' }
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
        httpClient.signUp(this.state.fields)
            .then(((user) => {
                this.setState({ fields: { name: "", email: '', password: '' } })
                if (user) {
                    this.props.onSignUpSuccess()
                    this.props.history.push('/')
                }
            }))
    }

    render() {
        const { name, email, password } = this.state.fields
        return (
            <Container className="Signup">
                <div className="row">
                    <div className="column column-33 column-offset-33">
                        <h1> Sign Up </h1>
                        <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                            <div>
                                <Input type="text" placeholder="Name" name="name" autoComplete="off" value={name} size="big" />
                            </div>
                            <div>
                                <Input type="text" placeholder="Email" name="email" autoComplete="off" value={email} size="big" />
                            </div>
                            <div>
                                <Input type="password" placeholder="Password" name="password" autoComplete="off" value={password} size="big" />
                            </div>
                            <Button positive > Sign Up </Button>
                        </form>
                    </div>
                </div>
            </Container>

        )
    }
}

export default SignUp