import React from 'react'
import {TextArea, Input, Button} from "semantic-ui-react"

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, tags, title, body} = props
  return (
    <form onSubmit={handleSubmit}>
        <Input 
          onChange={handleChange} 
          type="text" 
          placeholder="Title" 
          name="title" 
          autoComplete="off" 
          size="big"
          value={title} 
        />
        <TextArea 
          onChange={handleChange} 
          type="text" 
          placeholder="Description and Location Found" 
          name="body" 
          autoComplete="off" 
          value={body}
          autoHeight
        />
         <Input 
          onChange={handleChange} 
          type="text" 
          placeholder="Tags" 
          name="tags" 
          autoComplete="off" 
          size="big"
          value={tags}
        />
        <Input 
          type="file" 
          onChange={handleFileSelect} 
        />
        <Button positive>Submit</Button>
      </form>
  )
}

export default SubmitForm