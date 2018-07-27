import React from 'react'

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, title, body} = props
  return (
    <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="Title" 
          name="title" 
          autoComplete="off" 
          value={title} 
        />
        <textarea 
          onChange={handleChange} 
          type="text" 
          placeholder="Description and Location Found" 
          name="body" 
          autoComplete="off" 
          value={body}
        />
        <input 
          type="file" 
          onChange={handleFileSelect} 
        />
        <button>Submit</button>
      </form>
  )
}

export default SubmitForm