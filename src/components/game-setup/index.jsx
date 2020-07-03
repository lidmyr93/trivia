import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategorySelector from "../category-selector";
import StartButton from "../StartButton";
import { addPlayer } from "../../actions/game";

const GameSetup = () => {
    const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer(name));
    setName("");
  };
  return (
    <div>
      <CategorySelector />
      )}
      {/* <StartButton selectedCategoryId={this.state.selectedCategoryId} /> */}
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
    </div>
  );
};

export default GameSetup;
