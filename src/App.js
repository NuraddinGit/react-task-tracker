import { useState } from 'react'
import Tasks from './components/Tasks';
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go to Gym',
      day: 'Everyday',
      reminder: true,
    },
    {
      id: 2,
      text: 'Learn Coding',
      day: 'Every Day from 5pm to 12pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Make  small bussnies',
      day: 'feb 5th ar 2:30pm',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
