import React from "react";

// Define CategoryFilter component
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  // Create buttons for each category
  const categoryButtons = categories.map((category) => {
    // Set class name based on whether category is selected
    const className = category === selectedCategory ? "selected" : null;
    // Render button for category
    return (
      <button
        key={category} // Unique key for React to efficiently manage the list
        className={className} // Apply selected class if category is selected
        onClick={() => onSelectCategory(category)} // Call onSelectCategory with selected category
      >
        {category} {/* Display category name */}
      </button>
    );
  });

  // Render CategoryFilter component
  return (
    <div className="categories">
      <h5>Category filters</h5> {/* Heading for category filters */}
      {categoryButtons} {/* Render category buttons */}
    </div>
  );
}

export default CategoryFilter;
