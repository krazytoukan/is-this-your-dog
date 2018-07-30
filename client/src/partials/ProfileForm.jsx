import React from 'react';
import { Form, Input } from "semantic-ui-react"

const ProfileForm = (props) => {
  let { name, email, handleSubmit, handleChange } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={name} />
      </div>
      <div>
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          value={email} />
      </div>
      <Input type="Submit" value="Submit" positive />
    </Form>
  )
};

export default ProfileForm;