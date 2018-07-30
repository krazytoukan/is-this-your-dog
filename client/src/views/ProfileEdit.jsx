import React, { Component } from 'react'
import httpClient from '../httpClient'
import ProfileForm from '../partials/ProfileForm';
import ProfileDetail from '../partials/ProfileDetail'
import { Button, Form } from 'semantic-ui-react'


class ProfileEdit extends Component {
  state = {
    fields: { ...this.props.currentUser },
    formEnabled: false,
    message: ""
  }

  /* 
  get current user's submissions only 
  current user is httpClient.getCurrentUser()
  how are the submissions defined?
  submissions from currentUser
  get all submissions on page
  */

  handleChange = (e) => {
    e.preventDefault();
    // console.log(this.state)
    let fields = Object.assign({}, this.state.fields, { [e.target.name]: e.target.value });
    this.setState({ fields });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    httpClient.updateProfile(this.state.fields)
      .then(user => {
        this.props.onUpdateProfileSuccess()
      })
  }

  toggleForm = () => {
    this.setState({ formEnabled: true });
  }

  deleteProfile = (e) => {
    e.preventDefault()
    httpClient.deleteProfile()
      .then(response => {
        this.props.onDeleteProfileSuccess()
        this.props.history.push('/')
      })
  }

  render() {

    let { fields, formEnabled } = this.state;
    let { currentUser } = this.props
    return (
      <div>
        <ProfileDetail fields={fields} currentUser={currentUser} />
        <div>
          {formEnabled
            ? <Form.Field> <ProfileForm className="dogform" name={fields.name} email={fields.email} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> </Form.Field>
            : <Form.Field> <Button positive className="dogform" onClick={this.toggleForm}>Edit Profile</Button> </Form.Field>}
        </div>
        <Form.Field>
          <Button negative onClick={this.deleteProfile}>Delete Profile</Button>
        </Form.Field>
      </div>
    )
  }
}

export default ProfileEdit 