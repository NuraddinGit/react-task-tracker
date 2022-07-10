import { useState } from 'react'
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'

function App() {
  const [showAddTaks, setAddTask] = useState(false)
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
      reminder: false,
    },
    {
      id: 3,
      text: 'Make  small bussnies',
      day: 'feb 5th ar 2:30pm',
      reminder: false,
    },
  ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
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
      <Header onAdd={() => setAddTask(!showAddTaks)} />
      {showAddTaks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3 style={{ color: 'gray' }}>No Tasks is there</h3>
      )}
    </div>
  )
}

export default App
