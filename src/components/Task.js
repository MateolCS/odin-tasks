import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";
const Task = ({task}) => {

  return (
    <div className='task'>
        <div>
            <h2 className='task__title'>{task.taskName}</h2>
            <FaRegTimesCircle className='delete__task'/>
        </div>
        <p className='task__due__date'>{task.taskDueDate}</p>
    </div>
  )
}

export default Task
