import React from 'react'
import { TextArea, Input, Form, Container } from "semantic-ui-react"

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, tags, title, body } = props;
  return (
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            onChange={handleChange}
            type="text"
            placeholder="Title"
            name="title"
            autoComplete="off"  
            size="big"
            value={title}
          />
        </div>
        <div>
          <TextArea
            onChange={handleChange}
            type="text"
            placeholder="Description and Location Found"
            name="body"
            autoComplete="off"
            value={body}
            autoHeight
            style="{width: 400px}"
          />
        </div>
        <div>
          <TextArea
            onChange={handleChange}
            type="text"
            placeholder="Tags"
            name="tags"
            autoComplete="off"
            autoHeight
            value={tags}
          />
        </div>
        <div>
          <Input
            type="file"
            onChange={handleFileSelect}
          />
        </div>
        <Input type="submit" value="Submit" />
      </Form>
  )
}

export default SubmitForm