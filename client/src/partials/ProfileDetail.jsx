import React, { Component } from 'react'


class ProfileDetail extends Component {

    render() {
        const { fields, currentUser } = this.props
        return (
            <div>
                <h1>{fields.name}</h1>
                <h1>{fields.email}</h1>
            </div>
        )
    }
}

export default ProfileDetail