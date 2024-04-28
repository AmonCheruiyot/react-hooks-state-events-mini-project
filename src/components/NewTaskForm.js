import React, { useState } from "react";

// Define NewTaskForm component
function NewTaskForm({ onTaskFormSubmit, categories }) {
  // State variables for text and category, initialized using useState hook
  const [text, setText] = useState(""); // State variable to store task details
  const [category, setCategory] = useState("Code"); // State variable to store task category

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    // Call onTaskFormSubmit with new task data
    onTaskFormSubmit({ text, category });
    // Clear text and set category to default after form submission
    setText("");
    setCategory("Code");
  }

  // Render the NewTaskForm component
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      {/* Input field for task details */}
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)} // Update text state on input change
        />
      </label>
      {/* Dropdown menu for selecting task category */}
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)} // Update category state on selection change
        >
          {/* Display options for each category */}
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      {/* Button to submit the form */}
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;