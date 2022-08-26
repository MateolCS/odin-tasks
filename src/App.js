import './App.css';
import Tasks from './components/Tasks'
import Header from './components/Header';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: 'Dentist',
      taskDueDate: '10.10.2022'
    },
    {
      id: 2,
      taskName: 'Dentist',
      taskDueDate: '10.10.2022'
    },
    {
      id: 3,
      taskName: 'Dentist',
      taskDueDate: '10.10.2022'
    },
    {
      id: 4,
      taskName: 'Dentist',
      taskDueDate: '10.10.2022'
    },
  ])

  const addTask = (newTask) =>{
    setTasks([...tasks, newTask])
    console.log(tasks.length)
  }

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='app'>
      <Header onAdd={addTask}/>
      {tasks.length !== 0 && <Tasks tasks={tasks} onDelete={deleteTask}/>}
    </div>
  );
}

export default App;
