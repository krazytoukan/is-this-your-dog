import React from 'react'
import { TextArea, Input, Button, Container } from "semantic-ui-react"

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, tags, title, body } = props
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            onChange={handleChange}
            type="text"
            placeholder="Title"
            name="title"
            autoComplete="off"
            size="big"
            value={title}
            fluid
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
            fluid
            style="{width: 400px}"
          />
        </div>
        <div>
          <Input
            onChange={handleChange}
            type="text"
            placeholder="Tags"
            name="tags"
            autoComplete="off"
            size="big"
            value={tags}
            fluid
          />
        </div>
        <div>
          <Input
            type="file"
            onChange={handleFileSelect}
          />
        </div>
        <Button positive attached="right">Submit</Button>
      </form>
  )
}

export default SubmitForm