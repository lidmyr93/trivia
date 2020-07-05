import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategorySelector from "../category-selector";
import StartButton from "../StartButton";
import { addPlayer } from "../../actions/game";
import DifficultySelector from "../difficulty-selector";
import TypeSelector from "../type-selector/TypeSelector"

const GameSetup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [range, setRange] = useState(25);
  const handleChange = (e) => setName(e.target.value);
  const handleSlide = (e) => setRange(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer(name));
    setName("");
  };
  return (
    <div>
      <CategorySelector />
      <div>
        <input type="range" value ={range}min="10" max="50" step="1" onChange={(e) => handleSlide(e)}/>
        <span>{range}</span>
      </div>
      <DifficultySelector />
      <TypeSelector />
      {/* Addplayers */}
      <form>
        <label htmlFor="playername">Add player</label>
        <input
          type="text"
          placeholder="Player..."
          onChange={(e) => handleChange(e)}
          value={name}
        />
        <button onClick={(e) => onSubmit(e)}>Add</button>
      </form>
      <StartButton numberOfQuestions={range}/>
    </div>
  );
};

export default GameSetup;
