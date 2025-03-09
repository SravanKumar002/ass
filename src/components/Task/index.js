import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.completed ? "completed" : ""}`}
      onClick={() => onToggle(task.id)}
    >
      <FaCheck className="icon" />
      {/* <FaTrash  className=" "/>  */}
      <span>{task.name}</span>
      <div className="task-actions">
        <FaTrash
          className="icon"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
        />
      </div>
    </div>
  );
}

export default Task;
