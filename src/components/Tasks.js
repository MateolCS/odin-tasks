import React from 'react'
import Task from './Task'
const Tasks = ({tasks}) => {
  return (
    <div className='container'>
    {tasks.map((task) => <Task task={task} key={task.id}/>)}
    </div>
  )
}

export default Tasks
