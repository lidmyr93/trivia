import React from "react";
import styled from "styled-components";

const CategorySelector = ({ categories, handleCategory, selectedCategory }) => {
  
  return (
    <div>
      <h1>Categories</h1>
      <div>
        <label htmlFor="categories">Choose a category</label>
        <select name="category" onChange={(e) => handleCategory(e.target.value)}>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelector;
