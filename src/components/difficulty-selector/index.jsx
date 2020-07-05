import React from "react";
import { useDispatch } from "react-redux";
import { gameSetDifficulty } from "../../actions/game";

const DifficultySelector = () => {
  const dispatch = useDispatch();
    const handleChange = value => {
        dispatch(gameSetDifficulty(value))
        
    }
  const options = {
    easy : "easy",
    medium : "medium",
    hard: "hard"
  };
  return (
    <div>
      <h1>Difficulty</h1>
      <div>
        <label htmlFor="categories">Choose a Difficulty</label>
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

export default DifficultySelector;
