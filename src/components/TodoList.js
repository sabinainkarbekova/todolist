import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') return;
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };


  return (
    <div className="todolist">
      <h1>To-Do List</h1>
      <div className="input">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask}>Добавить задачу</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;