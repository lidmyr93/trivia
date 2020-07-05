import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePlayer } from "../../actions/game";

const Players = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const players = game && game.players;

  const handleDelete = (e) => {
    
    dispatch(removePlayer(e.target.value));
  };
  return (
    <div>
      <h1>Players</h1>
      {players &&
        players.length >= 1 &&
        players.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <button value={player.name} onClick={(e) => handleDelete(e)}>
              X
            </button>
          </div>
        ))}
    </div>
  );
};

export default Players;
