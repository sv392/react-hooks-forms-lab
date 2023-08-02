import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items , setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState(""); // New state for search text

  function handleCategoryChange(value) {
    setSelectedCategory(value);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .filter((item) => {
      // Filter based on search text
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

  function handleItemFormSubmit(newItem) {
    // Add the new item to the list
    setItems([...items, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
