import './App.css';
import Tasks from './components/Tasks'
import Header from './components/Header';
function App() {

  const tasks = [
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
  ]


  return (
    <div className='app'>
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
