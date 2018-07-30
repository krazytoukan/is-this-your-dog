import React from 'react'
import { TextArea, Input, Form, Container } from "semantic-ui-react"

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, tags, title, body } = props;
  return (
      <Form onSubmit={handleSubmit}>
        <div>
          <Input className="dogform"
            onChange={handleChange}
            type="text"
            placeholder="Title"
            name="title"
            autoComplete="off"  
            size="big"
            value={title}
            style={{width: 50 +"%"}}
          />
        </div>
        <div>
          <TextArea className="dogform"
            onChange={handleChange}
            type="text"
            placeholder="Description and Location Found"
            name="body"
            autoComplete="off"
            value={body}
            autoHeight
          />
        </div>
        <div>
          <TextArea className="dogform"
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
          <Input className="dogform"
            type="file"
            onChange={handleFileSelect}
          />
        </div>
        <Input className="dogform" type="submit" value="Submit" />
      </Form>
  )
}

export default SubmitForm