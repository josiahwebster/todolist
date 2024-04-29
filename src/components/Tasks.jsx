import React, { useState } from 'react';
import taskList from '../../tasks.json';

const Tasks = () => {
  const [tasks, setTasks] = useState(taskList);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle || !newTaskDescription) return;

    const newTask = {
      id: (tasks.length + 1).toString(),
      title: newTaskTitle,
      description: newTaskDescription,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to your ToDoList</h1>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-4">
            <input type="checkbox" id={`task-${task.id}`} className="form-checkbox h-6 w-6" />
            <label htmlFor={`task-${task.id}`} className="flex-grow">
              <span className="block font-semibold">{task.title}</span>
              <span className="block text-gray-600">{task.description}</span>
            </label>
          </li>
        ))}
      </ul>
      <form className="mt-8" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task"
          className="w-3/4 px-4 py-2 border border-gray-300 rounded-md mr-2"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="w-3/4 px-4 py-2 border border-gray-300 rounded-md mr-2"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Tasks;
