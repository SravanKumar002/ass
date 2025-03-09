import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import "./styles.css";


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>
        {" "}
        <span>Task Tracker</span>
      </h1>
      <AddTask onAdd={addTask} />
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleCompletion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
