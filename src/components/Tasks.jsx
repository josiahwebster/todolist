import React from 'react';
import taskList from '../../tasks.json';

const Tasks = () => {
  return (

    <div>
        <h1>Welcome to your ToDoList</h1>
        <ul>
        {taskList.map((task,index) => {

        return(    
            <>
            <li>
                <input type="checkbox" id="task-1" />
                <label htmlFor="task-1">{task.title}</label><hr />
                <label htmlFor="task-2">{task.description}</label>
              </li>

              </>)



    })}
    <form>
        <input type="text" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>

    </ul>
    </div>
  
  );
};

export default Tasks;
