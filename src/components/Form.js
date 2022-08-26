import React from 'react'
import { useState } from 'react'
import Button from './Button'
const Form = () => {

    const [taskName, setTaskName] = useState('')
    const [taskDueDate, setTaskDueDate] = useState('')

    const handleFormSubmit = (e) =>{
        e.preventDefault()

        if(!taskName || !taskDueDate){
            alert('Please fill all required fields')
        }

        const id = Math.floor(Math.random() * 10000) +1
        const newTask = {id, taskName, taskDueDate}

        setTaskDueDate('')
        setTaskName('')

        console.log(newTask) 
    }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <input className='form__input' type="text" placeholder='Enter task name' value={taskName} onChange={(e)=>{setTaskName(e.target.value)}}/>
      <input className='form__input' type="text" placeholder='Enter task due date' value={taskDueDate} onChange={(e)=>{setTaskDueDate(e.target.value)}}/>
      <Button text={'Add task'}/>
    </form>
  )
}

export default Form
