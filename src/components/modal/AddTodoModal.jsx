import React from 'react'
import { useState } from 'react'
import { useTodos } from '../../TodosContext'

function AddTodoModal() {

  const {todos, dispatch, setModalIsActive} = useTodos()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleAddButton() {
    if (title.length && description.length) {
      dispatch({
        type: 'addTodo',
        title: title,
        description: description,
        id: crypto.randomUUID(),
        isDone: false
      })
      setModalIsActive(false)
    }

  }
  return (
        <>
        <div className='form'>
            <h3>Add new Task</h3>
            <label htmlFor='title'>Title *</label>
            <input type='text' name='title' placeholder='Enter a title...' onChange={e => handleTitleChange(e)} value={title}/> <br/>
            <label htmlFor='description'>Description</label>
            <textarea name='description' rows="4" placeholder='Enter the decription..' onChange={(e) => handleDescriptionChange(e)} value={description}/><br/>
            <button className='btn gray' onClick={handleAddButton}>Add Task</button>
        </div>
        </>
  )
}

export default AddTodoModal