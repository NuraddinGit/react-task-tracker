import { useState } from 'react'
import Tasks from './components/Tasks'
import Header from './components/Header'

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

  // delete task func
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle remiander
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3 style={{ color: 'gray' }}>No Tasks is there</h3>
      )}
    </div>
  )
}

export default App
