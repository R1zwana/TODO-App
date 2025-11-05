import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() !== "") {
      // ✅ store task as object, not string
      setTasks([...tasks, { text: task.trim(), done: false }]);
      setTask("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function toggleDone(index) {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
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
            <li key={i} className={t.done ? "done" : ""}>
              <span>{t.text}</span>
              <div className="actions">
                <button
                  className="tick-btn"
                  onClick={() => toggleDone(i)}
                  title={t.done ? "Mark as Undone" : "Mark as Done"}
                >
                  {t.done ? "✔️" : "⬜"}
                </button>
                <button className="delete-btn" onClick={() => deleteTask(i)}>
                  ❌
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ToDo;
