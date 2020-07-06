import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameSetCategory } from "../../actions/game";
import { fetchCheckQuestions } from "../../api";

const CategorySelector = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.categories);
  const categories = cats && cats.categories;
  const handleCategory = (value) => {
    
    dispatch(gameSetCategory(value))
    
    //apicall to check amount of avaible questions
    //dispatch that number for the rangeselector to use
    //value
    dispatch(fetchCheckQuestions(value))
    
  };

  return categories ? (
    <div>
      <h1>Categories</h1>
      <div>
        <label htmlFor="categories">Choose a category</label>
        <select
          name="category"
          onChange={(e) => handleCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
              
            </option>
            
          ))}
        </select>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default CategorySelector;
