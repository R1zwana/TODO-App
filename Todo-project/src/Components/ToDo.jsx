import React, { useState } from 'react';
import './ToDo.css';

function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <h2>My To-Do App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.length === 0 ? (
          <p>No task added yet</p>
        ) : (
          tasks.map((t, i) => (
            <li key={i}>
              {t}
              <button onClick={() => deleteTask(i)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ToDo;
