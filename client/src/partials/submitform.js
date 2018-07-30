import React from 'react'
import { TextArea, Input, Form, Container } from "semantic-ui-react"

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, tags, title, body } = props;
  return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input className="dogform"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="title"
            autoComplete="off"  
            size="big"
            value={title}
            style={{width: 50 +"%"}}
          />
        </Form.Field>
        <Form.Field>
          <TextArea className="dogform"
            onChange={handleChange}
            type="text"
            placeholder="Description and Location Found"
            name="body"
            autoComplete="off"
            value={body}
            autoHeight
          />
        </Form.Field>
        <Form.Field>
          <TextArea className="dogform"
            onChange={handleChange}
            type="text"
            placeholder="Tags"
            name="tags"
            autoComplete="off"
            autoHeight
            value={tags}
          />
        </Form.Field>
        <Form.Field>
          <Input className="dogform"
            type="file"
            onChange={handleFileSelect}
          />
        </Form.Field>
        <Input className="dogform" type="submit" value="Submit" />
      </Form>
  )
}

export default SubmitForm