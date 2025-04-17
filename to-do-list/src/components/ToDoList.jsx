import React from "react";
import "../App.css";

export default function ToDoList({ tasks, onDelete }) {
  return (
    <div>
      <h2>My To Do List</h2>
      <ul>
        {tasks.length === 0 && <li>No tasks yet...</li>}
        {tasks.map((task, index) => (
          <li key={index} className="taskItem">
            <strong>{task.title}</strong>: {task.description}
            <button
              className="button taskButton"
              onClick={() => onDelete(index)}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
