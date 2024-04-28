import React from "react";
import Task from "./Task";

// TaskList component definition
function TaskList({ tasks, onDeleteTask }) {
  // Map through tasks to create Task components
  const taskList = tasks.map((task) => (
    <Task
      key={task.text} // Unique key for each task
      text={task.text} // Task text
      category={task.category} // Task category
      onDeleteTask={onDeleteTask} // onDeleteTask function
    />
  ));
  // Render TaskList component with taskList
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
