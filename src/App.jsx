import React from 'react'
import Navbar from './components/Navbar'
const tasks = ['Bins', 'Shopping', 'Study React']

const App = () => {
  return (
    <>
    <Navbar />
      <h1>ToDoList</h1>
      <form>
        <input type="text" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>
      {}
    </>
  )
}

export default App
