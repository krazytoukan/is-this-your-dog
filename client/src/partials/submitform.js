import React from 'react'
import { TextArea, Input, Button, Container } from "semantic-ui-react"

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, tags, title, body } = props
  return (
    <Container>
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
    </Container>
  )
}

export default SubmitForm