import React from 'react';
import { Form, Input } from "semantic-ui-react"

const ProfileForm = (props) => {
  let { name, email, handleSubmit, handleChange } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Input className="dogform"
          type="text"
          name="name"
          onChange={handleChange}
          value={name} />
      </Form.Field>
      <Form.Field>
        <Input className="dogform"
          type="text"
          name="email"
          onChange={handleChange}
          value={email} />
      </Form.Field>
      <Input type="Submit" value="Submit" positive />
    </Form>
  )
};

export default ProfileForm;