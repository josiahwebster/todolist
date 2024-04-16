import React from 'react'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
const tasks = ['Bins', 'Shopping', 'Study React']

const App = () => {
  return (
    <>
    <Navbar />
    <Tasks />
    </>
  )
}

export default App