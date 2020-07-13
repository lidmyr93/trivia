import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategorySelector from "../category-selector";
import StartButton from "../StartButton";
import { addPlayer } from "../../actions/game";
import DifficultySelector from "../difficulty-selector";
import TypeSelector from "../type-selector/TypeSelector";
import QuestionRangeSelector from "../question-range-selector";

const GameSetup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [range, setRange] = useState(null);
  const game = useSelector((state) => state.game);
  const category = game && game.category;
  const questionsLimit = game && game.questionsLimit;
  const handleChange = (e) => setName(e.target.value);
  const handleSlide = (e) => setRange(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer(name));
    setName("");
  };
  return (
    <div>
      <CategorySelector />
     {/*  {category && questionsLimit && (
        <QuestionRangeSelector
          handleChange={handleSlide}
          limit={questionsLimit}
          range={range}
        />
      )} */}

      {/* TODO: Feature*/}
      {/* <DifficultySelector /> */}
      {/* <TypeSelector /> */}
        
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
      
      <StartButton numberOfQuestions={range} />
    </div>
  );
};
//TODO: Add rangeselector to the end of setup cause all other options 
//affects the number of questions available from the api
//might look into scrapping some of the setup choices, but get everything done b4 hand
export default GameSetup;
