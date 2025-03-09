import React, { useState } from "react";

import { FaTrash, FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function AddTask({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAdd(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">
        <span>
          <FaPlus />
        </span>
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
