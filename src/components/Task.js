import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";
const Task = ({task}) => {

  return (
    <div className='task'>
        <div className='task__top'>
            <h2 className='task__title'>{task.taskName}</h2>
            <p className='task__due__date'>{task.taskDueDate}</p>
        </div>
        <FaRegTimesCircle className='delete__task'/>
        
    </div>
  )
}

export default Task
