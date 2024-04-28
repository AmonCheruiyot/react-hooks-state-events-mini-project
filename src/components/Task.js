function Task({ text, category, onDeleteTask }) {
  // Function to handle task deletion
  function handleClick() {
    onDeleteTask(text); // Call onDeleteTask function with task text
  }

  // Render Task component
  return (
    <div className="task">
      {/* Display task category */}
      <div className="label">{category}</div>
      {/* Display task text */}
      <div className="text">{text}</div>
      {/* Button to delete task */}
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;