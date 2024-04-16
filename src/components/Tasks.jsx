import React from 'react'
import taskList from '../../tasks.json'
console.log(taskList);

const Tasks = () => {
  return (
   
    <div>

        <h1>Welcome to your ToDoList</h1>
        <form>
            <input type="text" placeholder="Enter task" />
            <button type="submit">Add Task</button>
        </form>
      
    </div>
  )
}

export default Tasks
