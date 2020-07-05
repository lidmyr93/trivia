import React from "react";
import { useDispatch } from "react-redux";
import { gameSetType } from "../../actions/game";


const TypeSelector = () => {
  const dispatch = useDispatch();
    const handleChange = value => {
        dispatch(gameSetType(value))
        
    }
  const options = {
    easy : "easy",
    medium : "medium",
    hard: "hard"
  };
  return (
    <div>
      <h1>Type</h1>
      <div>
        <label htmlFor="categories"></label>
        <select
          name="category"
          onChange={(e) => handleChange(e.target.value)}
        >
        {Object.keys(options).map(x => (
            <option value={x} key={x}>
                {x}
            </option>
        ))}
        </select>
      </div>
    </div>
  );
};

export default TypeSelector;
